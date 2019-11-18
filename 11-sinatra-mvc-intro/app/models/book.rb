# Our model, a class designed to manage data for a specific table in our database. It can be used to create instances which model a specific row in the table, which contain all the relevant data from that row. Also comes with class and instance methods that allow us to perform CRUD actions on those instances which will be reflected in the relevant rows in the table.
class Book < ActiveRecord::Base
end
