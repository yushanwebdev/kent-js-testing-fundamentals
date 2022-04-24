const { sumAsync, subtractAsync } = require("../math");

test("sum adds numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`\u2713 ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}
