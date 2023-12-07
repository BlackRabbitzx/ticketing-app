package controller

import (
	"net/mail"
	"os"
	"time"

	"github.com/BlackRabbitzx/ticketing-app/backend/config"
	"github.com/BlackRabbitzx/ticketing-app/backend/model"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

func InsertUser(c *gin.Context) {
	var newUser model.User
	c.ShouldBindJSON(&newUser)

	if newUser.UserName == "" {
		c.String(200, "Field Cannot be Null")
		return
	}

	if newUser.Email == "" {
		c.String(200, "Field Cannot be Null")
		return
	}

	if newUser.Password == "" {
		c.String(200, "Field Cannot be Null")
		return
	}

	if newUser.RoleID == 0 {
		c.String(200, "Field Cannot be Null")
		return
	}

	var countEmail int64 = 0
	config.DB.Model(model.User{}).Where("email = ?", newUser.Email).Count(&countEmail)

	_, err := mail.ParseAddress(newUser.Email)
	if err != nil {
		c.String(200, "Invalid Email Format")
		return
	}

	if countEmail != 0 {
		c.String(200, "Email is Not Unique")
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), 10)

	if err != nil {
		panic(err)
	}

	newUser.Password = string(hashedPassword)

	config.DB.Create(&newUser)
	c.JSON(200, &newUser)

}

func SignIn(c *gin.Context) {

	var attempt, user model.User
	c.ShouldBindJSON(&attempt)

	if attempt.Email == "" || attempt.Password == "" {
		c.String(200, "Fields Cannot be Empty")
		return
	}

	config.DB.First(&user, "email = ?", attempt.Email)

	if user.ID == 0 {
		c.String(200, "Invalid Email Address")
		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(attempt.Password))
	if err != nil {
		c.String(200, "Invalid Password")
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"subject": user.Email,
		"expire":  time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRETKEY")))
	if err != nil {
		c.String(200, "Failed to Create Token")
		return
	}

	c.String(200, tokenString)

}
