class Course < ApplicationRecord

    validates :name, presence: true, length: {minimum:5, maximum: 50}
    has_many :student_courses
    has_many :students, through: :student_courses
end
