<?php



$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$dataIn = $_POST['dataIn'];
$dataOut = $_POST['dataOut'];
$standart = $_POST['standart'];
$standartB = $_POST['standartB'];
$home = $_POST['home'];
$homeB = $_POST['homeB'];


$token = "1368413806:AAGQSeFKbokS1FOso4nZ__hPIR3iXfFJGjs";
$chat_id = "-334704047";


$array = array($standart, $standartB, $home, $homeB,);
$new_array = array_filter($array, function($element) {
    return !empty($element);
});
$house_selected = implode("; ", $new_array);


$old_arr = array(
  'Ім’я: ' => $name,
  'Телефон: ' => $phone,
  'Заїзд: ' => $dataIn,
  'Виїзд: ' => $dataOut,
  'Житло: ' => $house_selected,
);

$arr = array_filter($old_arr, function($element) {
    return !empty($element);
});


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($send) {
    echo "ok :)";
} else {
echo "Сталась помилка :(";
}
?>