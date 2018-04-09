export default function (baseClass, ...mixins) {
  return mixins.reduce(
    (accumulator, currentValue) => currentValue(accumulator),
    baseClass,
  )
}
