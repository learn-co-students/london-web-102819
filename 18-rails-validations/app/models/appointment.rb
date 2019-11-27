class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  validate :appointment_clash
  validate :is_working_hours

  def appointment_clash
    clashing_appointment = self.doctor.appointments.find {|appointment| appointment.date == self.date && appointment.time == self.time}
    if clashing_appointment
      errors.add(:appointment, "with #{self.doctor.name} already taken")
    end
  end

  def is_working_hours
    hour = self.time.to_i
    if hour < 9 || hour > 18
      errors.add(:time, "is outside working hours")
    end
  end
end
