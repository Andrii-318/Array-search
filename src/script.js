document.getElementById("arrayForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const array = document
    .getElementById("arrayInput")
    .value.split(",")
    .map(Number);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Очистка результатів

  // 1. Сума та кількість позитивних елементів
  const positiveElements = array.filter((num) => num > 0);
  const sumPositive = positiveElements.reduce((acc, curr) => acc + curr, 0);
  const countPositive = positiveElements.length;

  // 2. Мінімальний елемент масиву та його порядковий номер
  const minElement = Math.min(...array);
  const minIndex = array.indexOf(minElement);

  // 3. Максимальний елемент масиву та його порядковий номер
  const maxElement = Math.max(...array);
  const maxIndex = array.indexOf(maxElement);

  // 4. Кількість негативних елементів
  const countNegative = array.filter((num) => num < 0).length;

  // 5. Кількість непарних позитивних елементів
  const countOddPositive = positiveElements.filter(
    (num) => num % 2 !== 0
  ).length;

  // 6. Кількість парних позитивних елементів
  const countEvenPositive = positiveElements.filter(
    (num) => num % 2 === 0
  ).length;

  // 7. Сума парних позитивних елементів
  const sumEvenPositive = positiveElements
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

  // 8. Сума непарних позитивних елементів
  const sumOddPositive = positiveElements
    .filter((num) => num % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0);

  // 9. Добуток позитивних елементів
  const productPositive = positiveElements.reduce((acc, curr) => acc * curr, 1);

  // 10. Найбільший серед елементів масиву, решту обнулити
  const maxOnlyArray = array.map((num) =>
    num === maxElement ? maxElement : 0
  );

  // Результати
  resultsDiv.innerHTML += `Сума позитивних елементів: ${sumPositive}, Кількість: ${countPositive}<br>`;
  resultsDiv.innerHTML += `Мінімальний елемент: ${minElement}, Порядковий номер: ${minIndex}<br>`;
  resultsDiv.innerHTML += `Максимальний елемент: ${maxElement}, Порядковий номер: ${maxIndex}<br>`;
  resultsDiv.innerHTML += `Кількість негативних елементів: ${countNegative}<br>`;
  resultsDiv.innerHTML += `Кількість непарних позитивних елементів: ${countOddPositive}<br>`;
  resultsDiv.innerHTML += `Кількість парних позитивних елементів: ${countEvenPositive}<br>`;
  resultsDiv.innerHTML += `Сума парних позитивних елементів: ${sumEvenPositive}<br>`;
  resultsDiv.innerHTML += `Сума непарних позитивних елементів: ${sumOddPositive}<br>`;
  resultsDiv.innerHTML += `Добуток позитивних елементів: ${productPositive}<br>`;
  resultsDiv.innerHTML += `Масив з найбільшим елементом, решта обнулені: ${maxOnlyArray}<br>`;
});
