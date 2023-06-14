def firstNonRepeatingCharacter(string):
    # Write your code here.
    characterFrequincies = {}
    for i in string:
        characterFrequincies[i] = characterFrequincies.get(i, 0)+1

    for idx in range(len(string)):
        if characterFrequincies[string[idx]] == 1:
            return idx
    return -1


print(firstNonRepeatingCharacter("abcdcaf"))
