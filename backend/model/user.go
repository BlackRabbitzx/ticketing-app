package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	UserID   string `json:"user_id" gorm:"primary_key"`
	UserName string `json:"user_name" gorm:"unique"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password" `
	RoleID   int    `json:"role_id"`
}
