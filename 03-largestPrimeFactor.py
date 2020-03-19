
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?


# # a prime factor is a factor of a number that is only divisible by itself and 1.
# # to find the greatest prime factor of a number, break down that number into its factors, and then find all factors that cannot be divided by any preceding integer. Return the greatest of these.

dividend = 600851475143
factors = []
primeFactors = []

#for every integer until we hit our dividend, check whether it's a factor of our dividend, and put the integer into factors[]
for i in range(dividend):
    if i > 1 and dividend % i == 0:
        factors.append(i)

#we then check whether each factor in our list of factors is a prime number
for i in range(factors.__len__()):
    #we're going to assume the element we're considering is prime until we've found a number that divides into it.
    prime = True

    #we check whether the element is divisible by any integer less than itself. J is used to count integers.
    for j in range(factors[i]):
        

        #if the element is divisible, then the it is not prime
        if j > 1 and factors[i] % j == 0:
            prime = False
            

    #if it is prime, it is added to the list of prime factors.
    if prime == True:
        primeFactors.append(factors[i])

#log the last element in the prime factors list, which will be the greatest one.
if primeFactors.__len__() > 0:
    print("---------------------------------")
    print("Potential Factors: " + factors.__str__())
    print("Prime factors:" + primeFactors.__str__())
    print("Greatest: " + primeFactors[primeFactors.__len__() - 1].__str__())
    print("---------------------------------")
else:
    print("No prime factors")