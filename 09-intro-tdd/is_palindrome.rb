def is_palindrome?(string)

  if string.class != String || string.size < 2
    raise ArgumentError.new('Input must be a string, greater than 2 characters in size')
  end

  string = 
    string
      .gsub(/\s/, '')
      .gsub(/\p{P}/, '')
      .downcase

  string == string.reverse
end
