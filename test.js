var twoSum1 = function (nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (cache.has(x))
      return [cache.get(x), i];
    else
      cache.set(nums[i], i);
  }
};


var twoSum2 = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (cache[x] != null)
      return [cache[x], i];
    else
      cache[nums[i]] = i;
  }
};