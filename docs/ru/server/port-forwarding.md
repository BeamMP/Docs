# Переадресация Портов

!!! опасность ":material-scale-balance: ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ:"

```
**Port forwarding is a risk**.

By Port forwarding you understand the risks of opening up ports on your home network to the public and therefore void the right to hold BeamMP accountable for **any and all** damages that may happen to you or your household.

We take no responsibility for any content on any externally linked services or websites.

<u>**If you do not understand this guide, please consider using one of our partners.**</u>
```

!!! предупреждение

```
  Please make sure your Router is not a 4G/5G exclusive device. If it is a hybrid device, make sure to select the cable connected adapter later in section 3 of this guide!
```

## Как настроить переадресацию портов.

Создание правила переадресации портов включает несколько подробных сетевых терминов. Будьте готовы записать несколько заметок по мере прохождения процесса.

В этом руководстве 4 основных шага.

## Краткое руководство. (Более подробное руководство приведено ниже)

<div class="grid cards" markdown>
</div>
<ul data-md-type="list" data-md-list-type="unordered" data-md-list-tight="false">
<li data-md-type="list_item" data-md-list-type="unordered">
<p data-md-type="paragraph">:material-dns:{ .lg .middle } <strong data-md-type="double_emphasis">Назначьте статический IP-адрес вашему компьютеру или устройствам</strong></p>
<hr data-md-type="hrule">
<p data-md-type="paragraph">Это необходимо для предотвращения изменения IP-адреса вашего устройства и нарушения правила переадресации портов.</p>
<p data-md-type="paragraph"><a href="https://portforward.com/router.htm#1" data-md-type="link">:octicons-arrow-right-24: Просмотр информации о вашем маршрутизаторе</a></p>
</li>
<li data-md-type="list_item" data-md-list-type="unordered">
<p data-md-type="paragraph">:material-router-wireless:{ .lg .middle } <strong data-md-type="double_emphasis">Войдите в свой маршрутизатор</strong></p>
<hr data-md-type="hrule">
<p data-md-type="paragraph">Обычно это можно сделать, найдя IP-адрес «шлюза по умолчанию», который можно найти, выполнив <code data-md-type="codespan">ipconfig</code> в командной строке и введя его в адресную строку веб-браузера.</p>
</li>
<li data-md-type="list_item" data-md-list-type="unordered">
<p data-md-type="paragraph">:material-lan-connect:{ .lg .middle } <strong data-md-type="double_emphasis">Перенаправьте порты на ваш компьютер</strong></p>
<hr data-md-type="hrule">
<p data-md-type="paragraph">Найдите раздел переадресации портов в веб-интерфейсе маршрутизатора. Большинство маршрутизаторов перечисляют раздел переадресации портов в разделе «Сеть», «Дополнительно» или «Локальная сеть».</p>
</li>
<li data-md-type="list_item" data-md-list-type="unordered">
<p data-md-type="paragraph">:material-test-tube:{ .lg .middle } <strong data-md-type="double_emphasis">Проверьте, что ваш порт правильно перенаправлен</strong></p>
<hr data-md-type="hrule">
<p data-md-type="paragraph">Используйте такой инструмент, как CheckBeamMP, чтобы проверить, работает ли правило.</p>
<div data-md-type="block_html">
<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
 <label for="ip">IP-адрес:</label>
 <input type="text" id="ip" name="ip"><br>
 <label for="port">Порт:</label>
 <input type="text" id="port" name="port"><br>
 <input type="submit" value="CheckBeamMP">
</form>
</div>
</li>
</ul>
<div data-md-type="block_html"></div>

## Подробное руководство

### 1. Назначение статического IP-адреса

### Метод 1: настройка статического IP-адреса с использованием резервирования DHCP

Другой способ задать статический IP-адрес в локальной сети — использовать функцию резервирования DHCP вашего маршрутизатора. Не все маршрутизаторы имеют эту функцию, поэтому это может быть неподходящим вариантом для вас. Пожалуйста, найдите в Интернете модель вашего маршрутизатора, чтобы найти руководство.

Если вам удалось это сделать, перейдите сразу к [шагу 2.](port-forwarding.md#2-log-in-to-your-router)

### Метод 2: Назначение статического IP-адреса в Windows

#### 1.1. Найдите свой текущий IP-адрес, шлюз и DNS-серверы:

Прежде чем мы сможем настроить статический IP-адрес, нам нужно знать ваши текущие сетевые настройки. Вам нужно будет записать их, поэтому приготовьте блокнот. Для этого шага мы воспользуемся командной строкой.

Откройте командную строку. 3 основных способа:

- Нажмите клавишу Windows, затем начните вводить фразу «cmd», затем нажмите Enter, когда увидите выделенную строку «Командная строка».


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-open-cmd.png)</figure>

После того, как вы окажетесь в командной строке, выполните следующую команду:

```
ipconfig /all
```

Вы увидите много данных. Если у вас есть виртуальные или несколько сетевых адаптеров, то вы увидите еще больше данных. Обычно можно увидеть много виртуальных адаптеров, если у вас установлен Hyper-V или Docker.


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-command-prompt-ipconfig-highlighted.png)</figure>

Рекомендуется использовать проводное сетевое соединение, которое будет запускать этот сервер, однако он будет работать и через беспроводное соединение. Вам нужно будет найти в этом списке адаптер, который имеет активное подключение к Интернету. Прокрутите список и найдите тот, которому назначен шлюз по умолчанию. Многие из виртуальных адаптеров не будут иметь шлюза по умолчанию.

Ниже приведены примеры локальных адресов IPv4, которые должен иметь хотя бы один из адаптеров. Вам нужно будет записать информацию о вашем адаптере.

- 192.168.xx
- 10.xxx
- 172.16.xx - 172.31.xx

Маска подсети (скорее всего 255.255.255.0) Основной шлюз (скорее всего 192.168.0.1 или 192.168.1.1)

!!! info "Обратите внимание" BeamMP в настоящее время не поддерживает IPv6 для хостинга сервера.

#### 1.2.Изменение настроек адаптера

Теперь нам нужно изменить настройки вашего сетевого адаптера, чтобы ваш ПК сохранил текущую конфигурацию IP. Чтобы получить доступ к настройкам вашей сети, самый быстрый способ:

- Нажмите один раз клавишу Windows.
- Введите фразу «сетевые подключения», пока не увидите «Просмотр сетевых подключений».
- Нажмите клавишу Enter.


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-start-menu-view-network-connections.png)</figure>

Вы должны увидеть список сетевых подключений на вашем компьютере. Если у вас установлены Hyper-V или Docker, их может быть много. Найдите все адаптеры, которые не называются "Hyper-V".


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-network-connections.png)</figure>

Щелкните правой кнопкой мыши по вашему адаптеру и выберите свойства. Если `Internet Protocol Version 4` не отмечен, то это неправильный адаптер. Выберите другой.


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-ethernet-properties-highlighted.png)</figure>

Дважды щелкните по `Internet Protocol Version 4` Измените `Obtain an IP address automatically` на `Use the following IP address` .

Заполните поля IP-адрес, маска подсети, шлюз по умолчанию и предпочитаемый DNS-сервер, используя информацию из командной строки (ipconfig /all).

В качестве альтернативы вместо использования своих DNS-серверов вы можете использовать DNS-серверы CloudFlare или Google:

- CloudFlare DNS: 1.1.1.1, 1.0.0.1
- Google DNS: 8.8.8.8, 8.8.4.4


<figure class="image image_resized" style="width:62%;" markdown="">![](../../assets/content/win11-network-settings-static-ip.png)</figure>

Нажмите Ok, затем нажмите Ok еще раз, и ваш адаптер теперь изменен с DHCP на статический. Поищите в Интернете, чтобы убедиться, что у вас все еще есть подключение к Интернету. Если нет, то измените настройки обратно на Получить IP-адрес автоматически и попробуйте следующий метод.

### 2. Войдите в свой маршрутизатор.

Теперь, когда на вашем устройстве есть статический IP-адрес, вы готовы перенаправить порт для BeamMP!

Для начала нам нужно войти в ваш роутер. Ранее одна из настроек, которую вы записали, это ваш Default Gateway. Это IP-адрес вашего роутера.

Большинство маршрутизаторов используют локально размещенную веб-страницу для управления. Чтобы просмотреть меню и настройки маршрутизатора:

- Откройте веб-браузер. Firefox, Chrome или Edge должны работать нормально.
- В адресной строке введите IP-адрес вашего шлюза по умолчанию, например 192.168.0.1 или 192.168.1.1, и нажмите Enter.

Теперь вы должны увидеть экран входа в систему вашего маршрутизатора. Не все маршрутизаторы требуют входа в систему, но большинство требуют. Вам необходимо знать имя пользователя и пароль вашего маршрутизатора. Если вы никогда не входили в систему раньше, ваши имя пользователя и пароль, скорее всего, установлены на заводские значения по умолчанию или, в некоторых случаях, написаны на наклейке вашего маршрутизатора.

Ниже перечислены некоторые из наиболее распространенных заводских имен пользователей и паролей:

Имя пользователя | Пароль
--- | ---
админ | админ
админ | пароль
{пустой} | админ
{пустой} | пароль

Попробуйте различные комбинации admin, password и оставьте записи пустыми. *Там, где написано blank, попробуйте оставить значение пустым.*

### 3. Создайте правила пересылки!

#### 3.1. Найдите раздел пересылки

Найдите раздел переадресации портов в веб-интерфейсе маршрутизатора. Перемещайтесь по маршрутизатору, нажимая вкладки или ссылки в верхней или левой части каждой страницы. Большинство маршрутизаторов перечисляют раздел переадресации портов в разделе «Сеть», «Дополнительно» или «Локальная сеть». Найдите его по следующим ключевым словам:

- Переадресация портов
- Пересылка
- Переадресация диапазона портов
- Виртуальные серверы
- Приложения и игры
- Расширенные настройки/параметры
- НАТ

#### 3.2. Введите данные

Как только вы найдете раздел переадресации портов вашего маршрутизатора, вы готовы ввести необходимую информацию. На вашем маршрутизаторе будет место для ввода портов, которые нужно переадресовать, и IP-адрес назначения, чтобы указать эти переадресованные порты. Если на вашем маршрутизаторе указаны как внутренние, так и внешние порты, сделайте их одинаковыми.

Для BeamMP требуются как UDP-, так и TCP-порт 30814 (если вы не изменили это в [ServerConfig.toml](create-a-server.md#4-configuration) ).

!!! info "Примечание" Хотя **порт** по умолчанию - **30814** , вы можете выбрать любой другой номер больше 1024, но меньше 65535, но вам нужно записать, что вы выбрали, если это не 30814. Вам нужно перенаправить как **TCP** , так и **UDP** . Рекомендуется придерживаться порта по умолчанию, так как он вряд ли будет использоваться другой службой на вашем ПК. Однако, если вы размещаете несколько серверов на одной машине, каждому серверу нужен свой порт. Например, сервер 1: 30814, сервер 2: 30815.

На некоторых маршрутизаторах вам может потребоваться создать два правила: одно для UDP и одно для TCP, в то время как другие удобны и позволяют сделать и то, и другое с помощью одного правила!

На большинстве маршрутизаторов есть кнопка «Сохранить», а на некоторых маршрутизаторах требуется перезапуск или перезагрузка, чтобы изменения вступили в силу.

### 4. Время тестировать!

Есть несколько способов проверить соединение.

Наш рекомендуемый способ — использовать наш инструмент **CheckBeamMP**, так как он проверяет проблемы и протоколы, специфичные для BeamMP.

<form action="https://check.beammp.com/api/v2/beammp" method="get" target="_blank">
  <label for="ip">IP-адрес:</label>
  <input type="text" id="ip" name="ip"><br>
  <label for="port">Порт:</label>
  <input type="text" id="port" name="port"><br>
  <input type="submit" value="CheckBeamMP">
</form>

Это можно сделать, получив свой публичный IPv4-адрес, это опять же можно сделать несколькими способами. Основной способ — использовать веб-сайт [whatsmyip.org](https://whatsmyip.org/) . Это простой веб-сайт, который отображает ваш публичный IP-адрес. Вам следует искать IP-адрес в формате: xxx.xxx.xxx.xxx

Перейдите по следующей ссылке и замените «IP» на ваш реальный адрес IPv4, а «Port» на порт вашего сервера. Не оставляйте пробелов. https://check.beammp.com/api/v2/beammp/ip/port

!!! успех "статус:ok"

```
  If you get the output above you can now join your server!
  There are 2 ways to join, either directly with the details you entered into Probably UP, or, if your server is set to 'public', through the server-list.
  Since you are hosting a server on-premise, use 127.0.0.1 (localhost) if the Server is running on the same PC as you play, or the LAN IPv4 of the local machine that is running the server.
```

!!! сбой "статус:ошибка"

```
  If the connection fails entirely, your ISP could be using CGNAT (Carrier Grade Network Address Translation). For more details, please check [How to check for CGNAT?](../FAQ/How-to-check-for-CGNAT.md),
  or open a Server Support ticket on our [Discord server](https://discord.gg/beammp) in the `#support` channel and one of our staff will get to your ticket!
  Should you only see TCP working and UDP failing, check Firewall and Port forwarding rules again.
```
