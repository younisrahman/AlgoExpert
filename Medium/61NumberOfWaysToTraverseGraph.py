# // O(2^(n*m)) times || O(n*m) space
def numberOfWaysToTraverseGraph(width, height):
    if width == 1 or height == 1:
        return 1
    return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1)


# // O(n*m) times || O(n*m) space
def numberOfWaysToTraverseGraph(width, height):
    num_of_ways = [[0] * height for _ in range(width)]

    for width_idx in range(width):
        for height_idx in range(height):
            if width_idx == 0 or height_idx == 0:
                num_of_ways[width_idx][height_idx] = 1
            else:
                ways_left = num_of_ways[width_idx - 1][height_idx]
                ways_up = num_of_ways[width_idx][height_idx - 1]
                num_of_ways[width_idx][height_idx] = ways_left + ways_up

    return num_of_ways[width - 1][height - 1]

# // O(n*m) times || O(1) space


def numberOfWaysToTraverseGraph(width, height):
    x_distance_to_corner = width - 1
    y_distance_to_corner = height - 1

    numerator = factorial(x_distance_to_corner + y_distance_to_corner)
    denominator = factorial(y_distance_to_corner) * \
        factorial(x_distance_to_corner)
    return numerator // denominator


def factorial(num):
    result = 1
    for n in range(2, num + 1):
        result *= n
    return result
