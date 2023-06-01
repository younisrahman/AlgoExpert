def classPhotos(redShirtHeights, blueShirtHeights):
    # Write your code here.
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reversed=True)

    shirtColorFirstRow = 'RED' if redShirtHeights[0] < blueShirtHeights[0] else 'BLUE'
    for idx in range (len(redShirtHeights)):
        redShirtHeight = redShirtHeights[idx]
        blueShirtHeight = blueShirtHeights[idx]

        if shirtColorFirstRow =='RED':
            if redShirtHeight >= blueShirtHeight:
                return False
            
        else:
            if redShirtHeight <= blueShirtHeight:
                return False
    return True
