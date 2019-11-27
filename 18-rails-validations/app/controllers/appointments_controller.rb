class AppointmentsController < ApplicationController

    def new
        @appointment = Appointment.new
        @doctors = Doctor.all
        @patients = Patient.all
    end

    def create
        appointment = Appointment.create appointment_params
        if appointment.valid?
            redirect_to appointment
        else
            flash[:errors] = appointment.errors.full_messages
            redirect_to new_appointment_path
        end
    end

    def show    
        @appointment = Appointment.find params[:id]
    end

    private

    def appointment_params
        params.require(:appointment).permit(:date,:time,:patient_id,:doctor_id)
    end


end
