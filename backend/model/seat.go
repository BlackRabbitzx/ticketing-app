package model

import "gorm.io/gorm"

type Seat struct {
	gorm.Model
	SeatID     string `json:"seat_id" gorm:"primary_key"`
	RoomID     string `json:"room_id" gorm:"foreign_key:RoomID"`
	SeatNumber string `json:"seat_number"`
	Status     bool   `json:"status"`
}
