package model

import (
	"time"

	"gorm.io/gorm"
)

type Screening struct {
	gorm.Model
	ScreeningID string    `json:"screening_id" gorm:"primary_key"`
	MovieID     string    `json:"movie_id" gorm:"foreign_key:MovieID"`
	StartTime   time.Time `json:"start_time"`
}
