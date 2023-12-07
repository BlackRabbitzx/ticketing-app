package config

import (
	"github.com/BlackRabbitzx/ticketing-app/backend/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func migrate() {
	DB.AutoMigrate(&model.User{})
	DB.AutoMigrate(&model.Movie{})
	DB.AutoMigrate(&model.Cinema{})
	DB.AutoMigrate(&model.RoomType{})
	DB.AutoMigrate(&model.Screening{})
	DB.AutoMigrate(&model.ScreeningRoom{})
	DB.AutoMigrate(&model.Seat{})
	DB.AutoMigrate(&model.Ticket{})
}

func Connect() {
	psqlInfo := "host=localhost user=postgres password=jennifer43 dbname=ticketapp port=5432"
	db, err := gorm.Open(postgres.Open(psqlInfo), &gorm.Config{})

	if err != nil {
		panic(err)
	}
	DB = db
	migrate()
}
