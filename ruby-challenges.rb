# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def odd_or_even(num)
  if num % 2 == 0
    puts "#{num} is even"
  else
    puts "#{num} is odd"
  end
end


p odd_or_even(reposts1)
p odd_or_even(reposts2)
p odd_or_even(reposts3)

# I keep getting nil under my answer. I hypothosize that its due to the string interpolation depending on what value you apply to the method.


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p beatles_album1.delete "aeiou"
p beatles_album2.delete "e"
p beatles_album3.delete "A,a,e,i,o,u"


# # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def check_palindrome(string)
    if string.reverse == string 
      puts "#{ string } is a palindrome."
    else 
      puts "#{ string } is not a palindrome."
    end
  end

  p check_palindrome(palindrome_test_case1.downcase)
  p check_palindrome(palindrome_test_case2.downcase)
  p check_palindrome(palindrome_test_case3.downcase)

#   I seen that how I wrote the method knew it was written properly, but I kept getting 'Racecar' and 'Rotator' back as not a plindrome. I assumed it was case sensitive so I decided to add downcase so that the data matched exactly forward and backwards. Same problem with the nil at the bottom of each answer.