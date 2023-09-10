def kadanes_algorithm(array):
    max_ending_here = array[0]
    max_so_far = array[0]

    for i in array[1:]:
        max_ending_here = max(i, max_ending_here + i)
        max_so_far = max(max_so_far, max_ending_here)

    return max_so_far
