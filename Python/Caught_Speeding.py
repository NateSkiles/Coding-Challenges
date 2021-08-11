### You are driving a little too fast, and a police officer stops you.
### Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
### If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1.
### If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

def caught_speeding(speed, is_birthday):
  ticket = 0
  if (is_birthday):
      if (speed >= 66 and speed <= 85):
          ticket = 1
      elif (speed >= 86):
          ticket = 2
  elif (not is_birthday):
      if (speed >= 61 and speed <= 80):
          ticket = 1
      elif (speed >= 81):
          ticket = 2
          
  return ticket

print(caught_speeding(80, False))

### Return True if the string "cat" and "dog" appear the same number of times in the given string.
def cat_dog(str):
    catDog = False
    catCount = str.count('cat')
    dogCount = str.count('dog')
    if (catCount == dogCount):
        catDog = True
        return catDog
    else:
        return catDog
    

### Return the sum of the numbers in the array, returning 0 for an empty array.
### Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
nums = [1, 2, 2, 1]

def sum13(nums):
    sum = 0
    skip = False
    if len(nums) == 0:
        return 0
    else:
        for x in nums:
            if x == 13:
                skip = True
                continue
            if skip:
                skip = False
                continue
            sum += x
        return sum
    
    
