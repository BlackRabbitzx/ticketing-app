package model

import "gorm.io/gorm"

type ScreeningRoom struct {
	gorm.Model
	RoomID      string `json:"user_id" gorm:"primary_key"`
	CinemaID    string `json:"cinema_id" gorm:"foreign_key:CinemaID"`
	RoomTypeID  string `json:"room_type_id" gorm:"foreign_key:RoomTypeID"`
	ScreeningID string `json:"screening_id" gorm:"foreign_key:ScreeningID"`
}
