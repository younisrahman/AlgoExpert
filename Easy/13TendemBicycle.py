def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    # Write your code here.
    redShirtSpeeds.sort(reverse=True)
    if fastest:
        blueShirtSpeeds.sort()
    else:
        blueShirtSpeeds.sort(reverse=True)

    totalSpeed =0
    for idx in range (len(redShirtSpeeds)):
        totalSpeed += max(redShirtSpeeds[idx],blueShirtSpeeds[idx])
    return totalSpeed

def reverseArrayInPlace(array):
    start =0
    end = len(array) -1
    while start < end:
        array[start],array[end]=array[end],array[start]
        start +=1
        end -+1



print(tandemBicycle([5,5,3,9,2],[3,6,7,2,1],True))