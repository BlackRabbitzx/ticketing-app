package model

import "gorm.io/gorm"

type RoomType struct {
	gorm.Model
	RoomTypeID    string `json:"roomtype_id" gorm:"primary_key"`
	TypeName      string `json:"type_name"`
	NumberOfSeats int    `json:"number_of_seats"`
}