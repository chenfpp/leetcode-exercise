# 滑动窗口最大值
def get_sliding_window_max(nums, k):
    length = len(nums)
    result = []
    for i in range(length):
        temp = []
        for j in range(k):
            if i + k - 1 < length:
                temp.append(nums[i + j])
            else:
                break
        if len(temp) > 0:
            result.append(max(temp))
    return result


if __name__ == "__main__":
    nums = [1, 2, 3, 2, 5, 4, 6, 7]
    k = 3
    print(get_sliding_window_max(nums, k))
