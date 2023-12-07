package model

import (
	"time"

	"gorm.io/gorm"
)

type Ticket struct {
	gorm.Model
	TicketID     string    `json:"ticket_id" gorm:"primary_key"`
	UserID       string    `json:"user_id" gorm:"foreign_key:UserID"`
	ScreeningID  string    `json:"screening_id" gorm:"foreign_key:ScreeningID"`
	SeatID       string    `json:"seat_id" gorm:"foreign_key:SeatID"`
	TicketPrice  float64   `json:"ticket_price"`
	PurchaseTime time.Time `json:"purchase_time"`
}
