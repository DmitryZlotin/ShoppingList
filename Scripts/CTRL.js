var purchaseApp = angular.module("purchaseApp", []);
purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
    $scope.sum = 0;
    for (item in $scope.list.items) {
        $scope.sum = $scope.sum + $scope.list.items[item].price;//считаем сумму всего списка
    }
    $scope.addItem = function (text, price) {
        price = parseFloat(price); // преобразуем введенное значение к числу
        if (text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
        {
            $scope.list.items.push({ purchase: text, price: price, done: false });
            $scope.sum += price;
        }
    }
});