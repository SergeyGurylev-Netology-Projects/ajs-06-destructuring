export default function getAttackOptions(hero) {
  const result = [];

  hero.special.forEach((el) => {
    const { description = 'Описание недоступно', ...rest } = el;
    rest.description = description;
    result.push(rest);
  });

  return result;
}
