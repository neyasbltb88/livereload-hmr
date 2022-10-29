/**
 * Генератор целых случайных чисел в заданных границах.
 * @param min {number} Нижняя граница генерации(включительно).
 * @param max {number} Верхняя граница генерации(включительно).
 * @returns {number} Возвращает случайное число в диапазоне от min до max.
 */
const random = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min));

export default random;
