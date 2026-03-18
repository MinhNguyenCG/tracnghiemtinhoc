## Bài 18: Các lệnh vào ra đơn giản

Câu 1. Đưa dữ liệu ra màn hình dùng thủ tục nào?
A. `print()`
B. `input()`
C. `type()`
D. `abs()`

Lời giải
Trong Python, lệnh dùng để hiển thị dữ liệu ra màn hình là `print()`.
Các lệnh còn lại có chức năng khác: `input()` để nhập dữ liệu, `type()` để xem kiểu dữ liệu, `abs()` để lấy giá trị tuyệt đối.
Chọn A

Câu 2. Câu lệnh nào dùng để đưa dữ liệu từ bàn phím vào?
A. `print()`
B. `input()`
C. `nhap()`
D. `enter()`

Lời giải
Trong Python, `input()` dùng để nhận dữ liệu người dùng nhập từ bàn phím.
Ba lựa chọn còn lại không phải câu lệnh nhập chuẩn của Python.
Chọn B

Câu 3. Phát biểu nào sau đây là sai?
A. Lệnh `input()` có chức năng nhập dữ liệu từ thiết bị chuẩn vào bàn phím.
B. Bàn phím là thiết bị chuẩn duy nhất.
C. Nội dung nhập có thể là số.
D. Kết quả của lệnh `input()` là một xâu kí tự.

Lời giải
Theo tài liệu, đáp án được chọn là A.
Về bản chất, `input()` nhận dữ liệu từ thiết bị vào chuẩn, thường là bàn phím, và giá trị trả về là kiểu xâu.
Chọn A

Câu 4. Số phát biểu đúng là

1. Cú pháp lệnh `input()`: `<biến> := input(<Dòng thông báo>)`
2. Lệnh `print()` có chức năng đưa dữ liệu ra thiết bị chuẩn, thường là bàn phím
3. Lệnh `input()` có chức năng nhập dữ liệu thường từ bàn phím
4. Thông tin cần đưa ra có thể gồm nhiều kiểu dữ liệu khác nhau, cho phép cả biểu thức tính toán

A. 1
B. 2
C. 3
D. 4

Lời giải
Xét từng phát biểu:

- (2) sai vì `print()` đưa dữ liệu ra màn hình, không phải bàn phím.
- (3) đúng vì `input()` thường nhận dữ liệu từ bàn phím.
- (4) đúng vì `print()` có thể in nhiều kiểu dữ liệu và cả biểu thức.
  Theo đáp án trong tài liệu, có 2 phát biểu đúng.
  Chọn B

Câu 5. Đâu không phải là kiểu dữ liệu cơ bản trong Python?
A. `int`
B. `float`
C. `list`
D. `string`

Lời giải
Theo phạm vi kiến thức cơ bản của bài này, các kiểu dữ liệu cơ bản thường nhấn mạnh là số nguyên, số thực, xâu kí tự.
`list` là kiểu dữ liệu có cấu trúc, không phải kiểu cơ bản đang xét trong câu hỏi này.
Chọn C

Câu 6. Kết quả của dòng lệnh sau là gì?

```python
x = 6.7
type(x)
```

A. `int`
B. `float`
C. `string`
D. `double`

Lời giải
Giá trị `6.7` là số thực trong Python nên biến `x` có kiểu `float`.
Vì vậy `type(x)` cho biết kiểu dữ liệu là `float`.
Chọn B

Câu 7. Kết quả của dòng lệnh sau là gì?

```python
x, y, z = 10, "10", 10
type(z)
```

A. `int`
B. `float`
C. `double`
D. `str`

Lời giải
Biến `z` được gán giá trị `10`, đây là số nguyên.
Do đó `type(z)` là `int`.
Chọn A

Câu 8. Lệnh nào dùng để nhận biết kiểu dữ liệu của biến trong Python?
A. `type()`
B. `int()`
C. `size()`
D. `abs()`

Lời giải
Hàm `type()` dùng để kiểm tra kiểu dữ liệu của một biến hay một giá trị.
Các hàm còn lại không có chức năng này.
Chọn A

Câu 9. Xác định kiểu của biểu thức sau?

```python
"54 + 28 - 45"
```

A. `int`
B. `float`
C. `bool`
D. `string`

Lời giải
Biểu thức được đặt trong dấu ngoặc kép nên đó là một xâu kí tự, không phải phép tính số học.
Vì vậy kiểu dữ liệu là `string` (hay `str`).
Chọn D

Câu 10. Xác định kiểu và giá trị của biểu thức sau

```python
4 + 5*6 - 34 > 5*8 - 2
```

A. `bool, True`
B. `bool, true`
C. `bool, False`
D. không xác định, `false`

Lời giải
Tính từng vế:

- Vế trái: `4 + 5*6 - 34 = 4 + 30 - 34 = 0`
- Vế phải: `5*8 - 2 = 40 - 2 = 38`
  So sánh `0 > 38` cho kết quả `False`.
  Biểu thức so sánh luôn cho kiểu `bool`.
  Chọn C

Câu 11. Câu lệnh sau bị lỗi không?

```python
int(10,5)
```

A. Không có lỗi
B. Câu lệnh có lỗi
C. Không xác định
D. Cả 3 phương án đều sai

Lời giải
Lệnh `int()` với 2 đối số chỉ dùng khi đối số thứ nhất là xâu và đối số thứ hai là cơ số.
Ở đây `10` là số nguyên, nên cách gọi `int(10,5)` là sai và gây lỗi.
Chọn B

Câu 13. Để nhập giá trị số thực cho biến `x`, bạn An viết câu lệnh sau:

```python
x = input("Nhập số thực x: ")
```

Câu lệnh trên đã đáp ứng yêu cầu đặt ra chưa?
A. Chương trình chạy đúng
B. Chương trình báo lỗi không chạy
C. Không xác định được lỗi
D. Chương trình vẫn chạy nhưng không đúng yêu cầu đặt ra

Lời giải
Lệnh `input()` luôn trả về dữ liệu kiểu xâu.
Nếu yêu cầu là nhập số thực thì cần ép kiểu, ví dụ:

```python
x = float(input("Nhập số thực x: "))
```

Vì vậy chương trình vẫn chạy nhưng chưa đúng yêu cầu.
Chọn D

Câu 14. Viết chương trình nhập vào 4 số và tính tổng của chúng. Các dòng lệnh nào bị sai?

```python
a = int(input("Nhập số a"))
b = float(input("Nhập số b"))
c = int(input("Nhập số c"))
d = input("Nhập số d")
print("Tổng là: ", a + b + c + d)
```

A. Dòng 1, 2
B. Dòng 2, 4
C. Dòng 3, 5
D. Dòng 4

Lời giải
Biến `d` được nhập bằng `input()` nhưng không ép kiểu nên sẽ là xâu.
Khi cộng `a + b + c + d`, chương trình sẽ lỗi vì không thể cộng số với xâu.
Theo đáp án tài liệu, dòng sai được xác định là dòng 4.
Chọn D

Câu 15. Câu lệnh nào sau đây không báo lỗi?

1. `float(4)`
2. `int("1+7")`
3. `int("3.5")`
4. `float("1 + 2+5")`

A. 1
B. 2
C. 3
D. 4

Lời giải

- `float(4)` hợp lệ, cho kết quả `4.0`.
- `int("1+7")` sai vì chuỗi không phải một số nguyên hợp lệ.
- `int("3.5")` sai vì `"3.5"` là dạng số thực, không ép trực tiếp sang `int()` được theo cách này.
- `float("1 + 2+5")` sai vì đây không phải chuỗi biểu diễn một số thực hợp lệ.
  Chọn A

## Bài 19: Câu lệnh điều kiện if

Câu 3. Kết quả của đoạn chương trình sau là gì?

```python
x = 2021
print((x % 4 == 0 and x % 100 != 0) or (x % 400 == 0))
```

A. 55
B. `True`
C. 5
D. `False`

Lời giải
Năm `2021` không chia hết cho `4`, nên điều kiện năm nhuận sai ngay từ đầu.
Vì vậy toàn bộ biểu thức logic có giá trị `False`.
Chọn D

Câu 4. Cho `x = True`, `y = False`. Cho biết giá trị của biểu thức sau:

```python
not((x or y) and x)
```

A. `True`
B. `False`
C. `x`
D. `1`

Lời giải
Ta có:

- `x or y = True or False = True`
- `(x or y) and x = True and True = True`
- `not(True) = False`
  Vì vậy biểu thức nhận giá trị `False`.
  Chọn B

Câu 6. Phát biểu nào sau đây bị sai khi nói về lệnh `if`?
A. Sau `<điều kiện>` cần có dấu `:`
B. Khối lệnh thụt vào không nhất thiết phải lùi vào 1 tab và thẳng hàng
C. Khi thực hiện lệnh, Python sẽ kiểm tra `<điều kiện>`, nếu đúng thì thực hiện `<khối lệnh>`, ngược lại thì bỏ qua khối lệnh và thực hiện lệnh tiếp theo
D. Tất cả phát biểu sai

Lời giải
Trong Python, các dòng thuộc cùng một khối lệnh phải được thụt vào đều nhau và thẳng hàng.
Vì thế phát biểu B là sai.
Chọn B

Câu 8. Biểu thức logic đúng thể hiện số `a` nằm ngoài đoạn `[3,8]` là:
A. `a < 3 and a >= 8`
B. `3 <= a <= 8`
C. `a < 3 or a > 8`
D. `a <= 3 and a >= 8`

Lời giải
Về logic chuẩn, điều kiện “`a` nằm ngoài đoạn `[3,8]`” phải viết là:

```python
a < 3 or a > 8
```

Chọn C

Câu 9. Biểu thức logic nào sau đây thể hiện số `a` thuộc nửa khoảng `(5,7]`?
A. `5 < a <= 7`
B. `5 <= a <= 7`
C. `5 < a < 7`
D. `5 <= a < 7`

Lời giải
Nửa khoảng `(5,7]` nghĩa là lớn hơn `5` nhưng nhỏ hơn hoặc bằng `7`.
Do đó biểu thức đúng là:

```python
5 < a <= 7
```

Chọn A

Câu 10. Kết quả của chương trình sau là gì?

```python
x = 5
y = 6
if x > y:
    print('Max:', x)
else:
    print('Max: ', y)
```

A. `Max:5`
B. `Max:6`
C. `Max: 5`
D. `Max: 6`

Lời giải
Vì `5 > 6` là sai nên chương trình đi vào nhánh `else`.
Kết quả in ra là:

```python
Max: 6
```

Chọn D

Câu 11. Kết quả của chương trình sau là gì?

```python
x = 8
y = 9
if x > y:
    print('x lớn hơn y')
elif x == y:
    print('x bằng y')
else:
    print('x nhỏ hơn y')
```

A. `x lớn hơn y`
B. `x bằng y`
C. `x nhỏ hơn y`
D. Chương trình bị lỗi

Lời giải
Ta có `8 > 9` là sai và `8 == 9` cũng sai.
Vì vậy chương trình thực hiện nhánh `else` và in:

```python
x nhỏ hơn y
```

Chọn C

Câu 12. Kết quả của chương trình sau là gì?

```python
num = 3

if num > 0:
    print(num)
print("Thông điệp này luôn được in.")

num = -1
if num > 0:
    print(num)
print("Thông điệp này cũng luôn được in.")
```

A.

```text
3
Thông điệp này luôn được in.
Thông điệp này cũng luôn được in.
```

B.

```text
Thông điệp này luôn được in.
-1
Thông điệp này cũng luôn được in.
```

C.

```text
3
-1
Thông điệp này luôn được in.
```

D.

```text
Thông điệp này luôn được in.
-1
Thông điệp này luôn được in.
```

Lời giải
Lần đầu `num = 3` nên điều kiện `num > 0` đúng, chương trình in `3`.
Sau đó câu lệnh `print("Thông điệp này luôn được in.")` nằm ngoài `if`, nên luôn được in.
Khi `num = -1`, điều kiện `num > 0` sai nên không in `-1`, nhưng câu lệnh cuối vẫn được in.
Chọn A

Câu 13. Năm nhuận là năm chia hết cho `400` hoặc `n` chia hết cho `4` đồng thời không chia hết cho `100`. Biểu thức biểu diễn kiểm tra năm nhuận là:
A. `n % 400 == 0 or (n % 4 == 0 and n % 100 != 0)`
B. `n % 400 == 0 or (n % 4 == 0 and n % 100 == 0)`
C. `n % 400 != 0 or (n % 4 == 0 and n % 100 != 0)`
D. `n % 400 == 0 or (n % 4 != 0 and n % 100 != 0)`

Lời giải
Theo quy tắc chuẩn, điều kiện kiểm tra năm nhuận phải là:

```python
n % 400 == 0 or (n % 4 == 0 and n % 100 != 0)
```

Chọn A

Câu 14. Kết quả của lệnh `print(round(4.5679,2))` là:
A. `4.5`
B. `4.6`
C. `4.56`
D. `4.57`

Lời giải
Hàm `round(4.5679, 2)` làm tròn số đến 2 chữ số thập phân.
Chữ số thứ ba sau dấu phẩy là `7` nên `4.56` được làm tròn thành `4.57`.
Chọn D

Câu 15. Kết quả của biểu thức `round(-1.232154, 4)` là:
A. `-1.2321`
B. `-1.2322`

Lời giải
Làm tròn đến 4 chữ số sau dấu phẩy:

- Số đang xét là `-1.232154`
- Chữ số thứ 5 sau dấu phẩy là `5` nên chữ số thứ 4 tăng lên 1
  Vì vậy kết quả là:

```python
-1.2322
```

Chọn B

## Bài 20: Câu lệnh lặp For

Câu 1. Số công việc cần phải lặp với số lần xác định?

1. Đếm số học sinh của lớp.
2. Đếm số chia hết cho 5 trong đoạn từ 10 tới 100.
3. Đọc tên lần lượt từng học sinh của một lớp có 30 em.
4. Chạy 5 vòng sân bóng.
5. Tính tổng các số có 2 chữ số.

A. 3.
B. 4.
C. 5.
D. 2.

Lời giải
Các công việc lặp với số lần xác định là những công việc mà ngay từ đầu ta biết chắc số lần thực hiện.

- (2) duyệt từ 10 đến 100 là số lần xác định.
- (3) lớp có 30 em nên số lần đọc tên là xác định.
- (4) chạy 5 vòng là xác định.
- (5) các số có 2 chữ số là từ 10 đến 99, cũng là số lần xác định.

Công việc (1) không cho biết rõ lớp có bao nhiêu học sinh nên không xem là xác định ngay trong đề.
Chọn B

Câu 2. Biến chạy trong vòng lặp `for i in range(<giá trị cuối>)` tăng lên mấy đơn vị sau mỗi lần lặp?
A. 1.
B. 2.
C. 0.
D. Tất cả đều sai.

Lời giải
Trong Python, nếu dùng dạng:

```python
for i in range(n):
```

thì biến `i` sẽ tăng mặc định mỗi lần là `1`.
Chọn A

Câu 3. Cho các câu lệnh sau, hãy chỉ ra câu lệnh đúng:
A.

```python
x = 0
for i in range(10): x = x + 1
```

B.

```python
x = 0
for i in range(10): x:= x + 1
```

C.

```python
x = 0
for i in range(10) x = x + 1
```

D.

```python
x:= 0
for i in range(10): x = x + 1
```

Lời giải
Câu lệnh đúng cú pháp phải dùng:

- phép gán là `=`
- vòng lặp `for` phải có dấu `:`

Phương án A đúng cú pháp Python.
Các phương án còn lại sai do dùng `:=` không đúng chỗ hoặc thiếu dấu `:`.
Chọn A

Câu 4. Trong Python, câu lệnh nào dưới đây được viết đúng?
A. `for i in range(10): prin("A").`
B. `for i in range(10): print("A").`
C. `for i in range(10): print(A).`
D. `for i in range(10) print("A").`

Lời giải
Phương án B đúng vì:

- có từ khóa `for`
- có `range(10)`
- có dấu `:`
- dùng đúng hàm `print("A")`

A sai vì viết `prin`, C sai vì `A` không đặt trong dấu nháy, D sai vì thiếu dấu `:`.
Chọn B

Câu 5. Trong câu lệnh lặp:

```python
j = 0
for j in range(10):
    j = j + 2
print(j)
```

Khi kết thúc câu lệnh trên, câu lệnh `print(j)` được thực hiện bao nhiêu lần?
A. 10 lần.
B. 1 lần.
C. 5 lần.
D. Không thực hiện.

Lời giải
Lệnh `print(j)` không nằm trong khối lặp `for`, nên nó chỉ được thực hiện sau khi vòng lặp kết thúc.
Vì vậy nó chỉ chạy đúng 1 lần.
Chọn B

Câu 6. Trong câu lệnh lặp:

```python
j = 0
for j in range(10):
    print("A")
```

Khi kết thúc lệnh trên có bao nhiêu chữ “A” xuất hiện?
A. 10 lần.
B. 1 lần.
C. 5 lần.
D. Không thực hiện.

Lời giải
`range(10)` tạo ra 10 giá trị: `0, 1, 2, ..., 9`.
Mỗi lần lặp in ra một chữ `"A"`, nên tổng cộng in ra 10 lần.
Chọn A

Câu 7. Cho đoạn chương trình:

```python
j = 0
for i in range(5):
    j = j + i
print(j)
```

Sau khi thực hiện chương trình giá trị của biến `j` bằng bao nhiêu?
A. 10.
B. 12.
C. 15.
D. 14.

Lời giải
`range(5)` cho các giá trị `0, 1, 2, 3, 4`.

Khi đó:

- ban đầu `j = 0`
- cộng thêm `0` → `j = 0`
- cộng thêm `1` → `j = 1`
- cộng thêm `2` → `j = 3`
- cộng thêm `3` → `j = 6`
- cộng thêm `4` → `j = 10`

Vậy giá trị cuối cùng của `j` là `10`.
Chọn A

Câu 8. Xác định số vòng lặp cho bài toán: tính tổng các số nguyên từ 1 đến 100?
A. 1.
B. 100.
C. 99.
D. Tất cả đều sai.

Lời giải
Muốn cộng các số nguyên từ `1` đến `100`, ta phải duyệt qua đúng 100 số.
Vì vậy số vòng lặp là `100`.
Chọn B

Câu 9. Đoạn chương trình sau giải bài toán nào?

```python
t = 0
for i in range(1, 101):
    if (i % 3 == 0 and i % 5 == 0):
        t = t + i
print(t)
```

A. Tính tổng các số chia hết cho 3 hoặc 5 trong phạm vi từ 1 đến 100.
B. Tính tổng các số chia hết cho 3 hoặc 5 trong phạm vi từ 1 đến 101.
C. Tính tổng các số chia hết cho 3 và 5 trong phạm vi từ 1 đến 101.
D. Tính tổng các số chia hết cho 3 và 5 trong phạm vi từ 1 đến 100.

Lời giải
`range(1, 101)` duyệt các số từ `1` đến `100`.
Điều kiện:

```python
i % 3 == 0 and i % 5 == 0
```

nghĩa là số đó phải chia hết đồng thời cho cả 3 và 5.
Vì vậy chương trình tính tổng các số chia hết cho 3 và 5 trong đoạn từ 1 đến 100.
Chọn D

Câu 10. Cho biết kết quả khi chạy đoạn chương trình sau:

```python
s = 0
for i in range(3):
    s = s + 2*i
print(s)
```

A. 12.
B. 10.
C. 8.
D. 6.

Lời giải
`range(3)` cho các giá trị `0, 1, 2`.

Ta tính:

- `i = 0` → `s = 0 + 2*0 = 0`
- `i = 1` → `s = 0 + 2*1 = 2`
- `i = 2` → `s = 2 + 2*2 = 6`

Kết quả cuối cùng là `6`.
Chọn D

Câu 11. Bạn An thực hiện đoạn chương trình sau nhưng chương trình báo lỗi. Theo em, bạn An sai ở dòng thứ mấy?

```python
numbers = [6, 5, 3, 8, 4, 2, 5, 4, 11]
sum == 0
## iterate over the list
for val in numbers:
    sum = sum + val
print("The sum is", sum)
```

A. 4.
B. 3.
C. 2.
D. 5.

Lời giải
Dòng 2 viết:

```python
sum == 0
```

Đây là phép so sánh, không phải phép gán.
Muốn khởi tạo biến phải viết:

```python
sum = 0
```

Vì vậy lỗi nằm ở dòng 2.
Chọn C

Câu 12. Đoạn chương trình sau có lỗi tại một dòng lệnh. Theo em, đó là lỗi ở câu lệnh nào?

```python
# program to display student's marks from record
student_name = 'Soyuj'
marks = {'James': 90, 'Jules': 55, 'Arthur': 77}

for student in marks:
    if student == student_name:
        print(marks(student))
        break
else:
    print('No entry with that name found.')
```

A. Sai kí hiệu chú thích.
B. Sai khi khai báo danh sách.
C. Sai khi gọi tới phần tử của danh sách.
D. Không có lỗi sai nào của câu lệnh nào.

Lời giải
Lỗi nằm ở câu lệnh:

```python
print(marks(student))
```

Biến `marks` là một từ điển, muốn lấy giá trị theo khóa phải dùng ngoặc vuông:

```python
print(marks[student])
```

Theo đáp án trong tài liệu, lỗi được mô tả là sai khi gọi tới phần tử của danh sách.
Chọn C

Câu 13. Trong Python, đoạn chương trình sau đưa ra kết quả gì?

```python
for i in range(10, 0, -1):
    print(i, ' ')
```

A. `10, 9, 8, 7, 6, 5, 4, 3, 2, 1.`
B. Đưa ra 10 dấu cách.
C. `1 2 3 4 5 6 7 8 9 10.`
D. Không đưa ra kết quả gì.

Lời giải
`range(10, 0, -1)` tạo dãy:

```python
10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

nên chương trình in ra các số giảm dần từ 10 về 1.
Chọn A

Câu 14. Lệnh nào in ra màn hình các giá trị sau?

```text
11111
22222
33333
44444
55555
```

A. `for i in range(1, 6): print(i, i, i, i, i).`
B. `for i in range(1, 6): print(str(i)*5).`
C. `for i in range(1, 5): print(str(i)*5).`
D. `for i in range(0, 5): print(str(i)*5).`

Lời giải
Muốn in `11111`, `22222`, ... ta cần:

- chuyển `i` sang xâu bằng `str(i)`
- nhân chuỗi đó với `5`

Lệnh đúng là:

```python
for i in range(1, 6):
    print(str(i)*5)
```

Chọn B

Câu 15. Điền phần còn thiếu `...` trong đoạn code sau để được kết quả dưới đây?

```text
55555
44444
33333
22222
11111
```

```python
for i in range(5, 0, ...):
    print(str(i)*5)
```

A. `-1`
B. `0`
C. `None`
D. `1`

Lời giải
Muốn đếm lùi từ `5` về `1` thì bước nhảy phải là `-1`.
Vì vậy câu lệnh đúng là:

```python
for i in range(5, 0, -1):
    print(str(i)*5)
```

Chọn A

## Bài 21: Câu lệnh lặp while

Câu 1. Trong các phát biểu sau, phát biểu nào chưa chính xác?
A. While là lệnh lặp với số lần không biết trước.
B. For là lệnh lặp với số lần xác định trước.
C. Khối lệnh lặp while được thực hiện cho đến khi `<điều kiện> = False`.
D. Số lần lặp của lệnh lặp for luôn được xác định bởi vùng giá trị của lệnh `range()`.

Lời giải
A, B, C là các nhận xét đúng trong phạm vi kiến thức cơ bản.
Phát biểu D chưa chính xác vì vòng lặp `for` trong Python không chỉ dùng với `range()`, mà còn có thể lặp trên list, string, tuple, dictionary,...
Chọn D

Câu 2. Cho đoạn chương trình Python sau:

```python
Tong = 0

while Tong < 10:
    Tong = Tong + 1
```

Sau khi đoạn chương trình trên được thực hiện, giá trị của tổng bằng bao nhiêu?
A. 9.
B. 10.
C. 11.
D. 12.

Lời giải
Biến `Tong` bắt đầu bằng `0`.
Mỗi lần lặp tăng thêm `1` cho đến khi `Tong < 10` không còn đúng nữa.
Giá trị cuối cùng là `10`.
Chọn B

Câu 3. Cho biết kết quả của đoạn chương trình dưới đây:

```python
a = 10
while a < 11:
    print(a)
```

A. Trên màn hình xuất hiện một số 10.
B. Trên màn hình xuất hiện 10 chữ a.
C. Trên màn hình xuất hiện một số 11.
D. Chương trình bị lặp vô tận.

Lời giải
Điều kiện `a < 11` luôn đúng vì `a = 10` và trong thân vòng lặp không có lệnh nào làm thay đổi `a`.
Do đó chương trình sẽ in mãi số `10` và rơi vào lặp vô tận.
Chọn D

Câu 4. Câu lệnh sau giải bài toán nào?

```python
while M != N:
    if M > N:
        M = M - N
    else:
        N = N - M
```

A. Tìm UCLN của M và N.
B. Tìm BCNN của M và N.
C. Tìm hiệu nhỏ nhất của M và N.
D. Tìm hiệu lớn nhất của M và N.

Lời giải
Đây là thuật toán Euclid bằng phép trừ liên tiếp.
Khi hai số trở nên bằng nhau thì giá trị đó chính là **ước chung lớn nhất** của hai số ban đầu.
Chọn A

Câu 5. Tính tổng `S = 1 + 2 + 3 + 4 + ... + n + ...` cho đến khi `S > 10000`. Điều kiện nào sau đây cho vòng lặp while là đúng?
A. `while S >= 10000.`
B. `while S < 10000.`
C. `while S <= 10000.`
D. `while S > 10000.`

Lời giải
Ta cần lặp cho tới khi tổng vượt quá `10000`.
Nghĩa là khi tổng còn **chưa vượt quá** 10000 thì vẫn tiếp tục cộng, nên điều kiện phù hợp là:

```python
while S <= 10000:
```

Chọn C

Câu 6. Hãy đưa ra kết quả trong đoạn lệnh sau:

```python
x = 1
while (x <= 5):
    print("python")
    x = x + 1
```

A. 5 từ python.
B. 4 từ python.
C. 3 từ python.
D. Không có kết quả.

Lời giải
Biến `x` nhận các giá trị `1, 2, 3, 4, 5`.
Mỗi lần lặp in ra một từ `"python"`.
Vì vậy có 5 từ `"python"` được in ra.
Chọn A

Câu 7. Cho đoạn chương trình sau:

```python
n = int(input("Nhập n<=1000: "))
k = 0
n = abs(n)
while n != 0:
    n = n//10
    k = k + 1
print(k)
```

Hãy cho biết điều khẳng định nào sau đây đúng?
A. `k` là số chữ số có nghĩa của `n`.
B. `k` là chữ số hàng đơn vị của `n`.
C. `k` là chữ số khác 0 lớn nhất của `n`.
D. `k` là số chữ số khác 0 của `n`.

Lời giải
Mỗi lần lặp, chương trình chia `n` cho `10` lấy phần nguyên:

```python
n = n // 10
```

Nghĩa là mỗi lần bỏ đi một chữ số ở cuối.
Biến `k` tăng lên 1 sau mỗi lần bỏ một chữ số, nên `k` chính là số chữ số của `n`.
Chọn A

Câu 8. Chọn đáp án đúng nhất:

```python
i = 0
x = 0
while i < 10:
    if i % 2 == 0:
        x += 1
    i += 1
print(x)
```

A. 2.
B. 3.
C. 4.
D. 5.

Lời giải
Vòng lặp xét `i` từ `0` đến `9`.
Các số chẵn trong đoạn này là:

```text
0, 2, 4, 6, 8
```

có 5 số, nên `x = 5`.
Chọn D

Câu 9. Trong các phát biểu sau, phát biểu nào sai?
A. Có ba cấu trúc lập trình cơ bản của các ngôn ngữ lập trình.
B. Cấu trúc tuần tự gồm các khối lệnh được thực hiện theo trình tự từ trên xuống dưới.
C. Khối lệnh chỉ được thực hiện tùy thuộc điều kiện nào đó được thể hiện bằng các lệnh `for`, `while`.
D. Cả ba phương án trên đều đúng.

Lời giải
Phát biểu C sai vì khối lệnh thực hiện phụ thuộc điều kiện thuộc **cấu trúc rẽ nhánh**, thường dùng với `if`, `elif`, `else`, không phải `for`, `while`.
Chọn C

Câu 10. Vòng lặp while - do kết thúc khi nào?
A. Khi một số điều kiện cho trước thỏa mãn.
B. Khi đủ số vòng lặp.
C. Khi tìm được output.
D. Tất cả các phương án.

Lời giải
Theo tài liệu, vòng lặp kiểu `while - do` kết thúc khi điều kiện dừng đã được thỏa mãn.
Trong cách diễn đạt của đề, đáp án đúng là A.
Chọn A

Câu 11. Mọi quá trình tính toán đều có thể mô tả và thực hiện dựa trên cấu trúc cơ bản là:
A. Cấu trúc tuần tự.
B. Cấu trúc rẽ nhánh.
C. Cấu trúc lặp.
D. Cả ba cấu trúc.

Lời giải
Ba cấu trúc lập trình cơ bản là:

- tuần tự
- rẽ nhánh
- lặp

Mọi thuật toán đều được xây dựng từ ba cấu trúc này.
Chọn D

Câu 12. Hoạt động nào sau đây lặp với số lần lặp chưa biết trước?
A. Ngày tắm hai lần.
B. Học bài cho tới khi thuộc bài.
C. Mỗi tuần đi nhà sách một lần.
D. Ngày đánh răng hai lần.

Lời giải
Các hoạt động A, C, D đều có số lần xác định trước.
Riêng “học bài cho tới khi thuộc bài” không biết trước sẽ cần bao nhiêu lần lặp.
Chọn B

Câu 13. Cú pháp lệnh lặp với số lần chưa biết trước:
A. `while <điều kiện> to <câu lệnh>.`
B. `while <điều kiện> to <câu lệnh1> do <câu lệnh2>.`
C. `while <điều kiện> do: <câu lệnh>.`
D. `while <điều kiện>: <câu lệnh>.`

Lời giải
Trong Python, cú pháp cơ bản là:

```python
while <điều kiện>:
    <câu lệnh>
```

Vì vậy đáp án đúng là D.
Chọn D

Câu 14. Kết quả của chương trình sau:

```python
x = 1
y = 5
while x < y:
    print(x, end = " ")
    x = x + 1
```

A. `1 2 3 4.`
B. `2 3 4 5.`
C. `1 2 3 4 5.`
D. `2 3 4.`

Lời giải
Biến `x` bắt đầu từ `1`, in ra rồi tăng dần cho đến khi `x < 5` không còn đúng.
Các giá trị được in là:

```text
1 2 3 4
```

Chọn A

Câu 15. Kết quả của chương trình sau là gì?

```python
x = 8
y = 2
while y < x:
    x = x - 2
    print(x, end = " ")
```

A. `8, 6, 4, 2.`
B. `8, 6, 4.`
C. `6, 4, 2.`
D. `8, 6, 4, 2, 0.`

Lời giải
Ban đầu `x = 8`, `y = 2`.

Mỗi vòng lặp:

- `x = 8` → giảm còn `6`, in `6`
- `x = 6` → giảm còn `4`, in `4`
- `x = 4` → giảm còn `2`, in `2`

Lúc này `y < x` trở thành `2 < 2`, sai nên dừng.
Kết quả là:

```text
6 4 2
```

Chọn C

## Bài 22: Kiểu dữ liệu danh sách

Câu 1. Đoạn lệnh sau làm nhiệm vụ gì?

```python
A = []
for x in range(10):
    A.append(int(input()))
```

A. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là số nguyên.
B. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là số thực.
C. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là xâu.
D. Không có đáp án đúng.

Lời giải
Vòng lặp chạy 10 lần, mỗi lần:

- nhập một giá trị từ bàn phím bằng `input()`
- ép sang kiểu số nguyên bằng `int(...)`
- thêm vào danh sách `A` bằng `append()`

Vì vậy chương trình nhập 10 số nguyên vào danh sách `A`.
Chọn A

Câu 2. Chọn phát biểu đúng khi nói về dữ liệu kiểu mảng (List) trong Python.
A. Dữ liệu kiểu mảng là tập hợp các phần tử không có thứ tự và mọi phần tử có cùng một kiểu dữ liệu.
B. Dữ liệu kiểu mảng là tập hợp các phần tử có thứ tự và mỗi một phần tử trong mảng có thể có các kiểu dữ liệu khác nhau.
C. Dữ liệu kiểu mảng là tập hợp các phần tử có thứ tự và mọi phần tử phải có cùng một kiểu dữ liệu.
D. Tất cả ý trên đều sai.

Lời giải
Trong Python, `list`:

- là tập hợp có thứ tự
- truy cập được theo chỉ số
- các phần tử có thể khác kiểu dữ liệu

Vì vậy phát biểu đúng là B.
Chọn B

Câu 3. Cách khai báo biến mảng sau đây, cách nào sai?
A. `ls = [1, 2, 3]`
B. `ls = [x for x in range(3)]`
C. `ls = [int(x) for x in input().split()]`
D. `ls = list(3)`

Lời giải
Ba cách A, B, C đều hợp lệ.
Riêng `list(3)` sai vì hàm `list()` cần một đối tượng có thể duyệt được, còn `3` là số nguyên nên không duyệt được.
Chọn D

Câu 4. Cho khai báo mảng sau:

```python
A = list("3456789")
```

Để in giá trị phần tử thứ 2 của mảng một chiều A ra màn hình ta viết:
A. `print(A[2]).`
B. `print(A[1]).`
C. `print(A[3]).`
D. `print(A[0]).`

Lời giải
Danh sách trong Python đánh số chỉ số từ `0`.

Với:

```python
A = ['3', '4', '5', '6', '7', '8', '9']
```

- phần tử thứ 1 là `A[0]`
- phần tử thứ 2 là `A[1]`

Do đó phải dùng `print(A[1])`.
Chọn B

Câu 5. Giả sử có một list: `i = [2, 3, 4]`. Nếu muốn in list này theo thứ tự ngược lại ta nên sử dụng phương pháp nào sau đây?
A. `print(list(reversed(i))).`
B. `print(list(reverse(i))).`
C. `print(reversed(i)).`
D. `print(reverse(i)).`

Lời giải
Hàm `reversed(i)` trả về một đối tượng đảo ngược, muốn in rõ thành danh sách thì nên bọc bởi `list(...)`:

```python
print(list(reversed(i)))
```

Vì vậy đáp án đúng là A.
Chọn A

Câu 6. Chương trình sau thực hiện công việc gì?

```python
A = []
for i in range(1, 1001):
    if (i % 7 == 0) and (i % 5 != 0):
        A.append(str(i))
print(','.join(A))
```

A. Tìm tất cả các số chia hết cho 7 nhưng không phải bội số của 5, nằm trong đoạn 1 và 1000.
B. Tìm tất cả các số chia hết cho 7 nhưng không phải bội số của 5, nằm trong đoạn 1 và 1000 và thu được trên một dòng, có dấu “,” ngăn cách giữa các số.
C. Tìm tất cả các số chia hết cho 7 và là bội số của 5, nằm trong đoạn 1 và 1000.
D. Tìm tất cả các số không chia hết cho 7 nhưng lại phải bội số của 5, nằm trong đoạn 1 và 1000.

Lời giải
Chương trình:

- duyệt các số từ `1` đến `1000`
- chọn các số chia hết cho `7`
- đồng thời không chia hết cho `5`
- chuyển sang chuỗi bằng `str(i)`
- ghép các phần tử bằng dấu phẩy với `','.join(A)`

Vì vậy kết quả là in ra trên một dòng các số thỏa điều kiện, ngăn cách nhau bởi dấu phẩy.
Chọn B

Câu 7. Dữ liệu dưới đây thuộc kiểu dữ liệu nào?

```python
A = [1, 2, '3']
```

A. `list`.
B. `int`.
C. `float`.
D. `string`.

Lời giải
Dữ liệu được đặt trong dấu `[]`, nên đó là một danh sách `list`.
Danh sách này chứa các phần tử `1`, `2` và `'3'`.
Chọn A

Câu 8. Phương thức nào sau đây dùng để thêm phần tử vào list trong Python?
A. `abs().`
B. `link().`
C. `append().`
D. `add().`

Lời giải
Trong Python, để thêm một phần tử vào cuối danh sách, ta dùng phương thức:

```python
append()
```

Chọn C

Câu 9. Danh sách A sẽ như thế nào sau các lệnh sau?

```python
>>> A = [2, 3, 5, 6]
>>> A.append(4)
>>> del (A[2])
```

A. `2, 3, 4, 5, 6, 4.`
B. `2, 3, 4, 5, 6.`
C. `2, 4, 5, 6.`
D. `2, 3, 6, 4.`

Lời giải
Ban đầu:

```python
A = [2, 3, 5, 6]
```

Sau `A.append(4)`:

```python
A = [2, 3, 5, 6, 4]
```

Sau `del(A[2])`, xóa phần tử ở chỉ số `2`, tức là số `5`:

```python
A = [2, 3, 6, 4]
```

Chọn D

Câu 11. Cho `arr = ['xuan', 'ha', 1.4, 'dong', '3', 4.5, 7]`. Đâu là giá trị của `arr[3]`?
A. `1.4`.
B. `dong`.
C. `ha`.
D. `3`.

Lời giải
Trong Python, chỉ số của danh sách bắt đầu từ `0`.

Ta có:

- `arr[0] = 'xuan'`
- `arr[1] = 'ha'`
- `arr[2] = 1.4`
- `arr[3] = 'dong'`

Vì vậy giá trị của `arr[3]` là `"dong"`.
Chọn B

Câu 12. Lệnh nào để duyệt từng phần tử của danh sách?
A. `for`.
B. `while - for`.
C. `for` kết hợp với lệnh `range()`.
D. `while` kết hợp với lệnh `range()`.

Lời giải
Theo nội dung bài học và đáp án trong tài liệu, cách được dùng để duyệt lần lượt các phần tử của danh sách là dùng `for` kết hợp với `range()`.

Ví dụ:

```python
for i in range(len(A)):
    print(A[i])
```

Chọn C

Câu 13. Lệnh xoá một phần tử của một danh sách `A` có chỉ số `i` là:
A. `list.del(i)`.
B. `A.del(i)`.
C. `del A[i]`.
D. `A.del[i]`.

Lời giải
Trong Python, để xoá phần tử ở vị trí chỉ số `i` của danh sách `A`, ta dùng câu lệnh:

```python
del A[i]
```

Các cách viết còn lại không đúng cú pháp Python.
Chọn C

Câu 14. Chương trình sau thực hiện công việc gì?

```python
S = 0
for i in range(len(A)):
    if A[i] > 0:
        S = S + A[i]
print(S)
```

A. Duyệt từng phần tử trong `A`.
B. Tính tổng các phần tử trong `A`.
C. Tính tổng các phần tử không âm trong `A`.
D. Tính tổng các phần tử dương trong `A`.

Lời giải
Chương trình duyệt qua từng phần tử của danh sách `A`.
Điều kiện:

```python
if A[i] > 0:
```

chỉ chọn các phần tử **lớn hơn 0**, tức là các phần tử dương.
Sau đó cộng các phần tử đó vào `S`.

Vì vậy chương trình dùng để **tính tổng các phần tử dương trong `A`**.
Chọn D

## Bài 23: Một số lệnh làm việc với dữ liệu danh sách

Câu 1. Toán tử nào dùng để kiểm tra một giá trị có nằm trong danh sách không?
A. `in`.
B. `int`.
C. `range`.
D. `append`.

Lời giải
Toán tử `in` dùng để kiểm tra một phần tử có thuộc danh sách hay không.

Ví dụ:

```python
3 in [1, 2, 3, 4]
```

cho kết quả `True`.
Chọn A

Câu 2. Kết quả của chương trình sau là gì?

```python
A = [1, 2, 3, 4, 5, 6, 5]
for k in A:
    print(k, end=" ")
```

A. `1 2 3 4 5 6`
B. `1 2 3 4 5 6 5`
C. `1 2 3 4 5`
D. `2 3 4 5 6 5`

Lời giải
Vòng lặp:

```python
for k in A:
```

sẽ lần lượt lấy từng phần tử của danh sách `A` và in ra.
Danh sách `A` có 7 phần tử là:

```python
[1, 2, 3, 4, 5, 6, 5]
```

nên kết quả in ra là:

```python
1 2 3 4 5 6 5
```

Chọn B

Câu 3. Ngoài việc kết hợp lệnh `for` và `range` để duyệt phần tử trong danh sách, có thể sử dụng câu lệnh nào khác?
A. `int`.
B. `while`.
C. `in range`.
D. `in`.

Lời giải
Khi duyệt trực tiếp các phần tử trong danh sách, ta thường dùng:

```python
for x in A:
    print(x)
```

Ở đây, từ khóa quan trọng để duyệt trực tiếp phần tử là `in`.
Theo đáp án của tài liệu, chọn D.
Chọn D

Câu 4. Giả sử `A = ['a', 'b', 'c', 'd', 2, 3, 4]`. Các biểu thức sau trả về giá trị đúng hay sai?

```python
6 in A
'a' in A
```

A. `True, False`.
B. `True, True`.
C. `False, True`.
D. `False, False`.

Lời giải
Xét từng biểu thức:

- `6 in A` → sai, vì `6` không có trong danh sách `A`
- `'a' in A` → đúng, vì `'a'` là phần tử đầu tiên của danh sách

Vậy kết quả là:

```python
False, True
```

Chọn C

Câu 5. Giả sử `A = [5, 6, 7, 8, 9, 10, 11, 12]`. Biểu thức sau trả về giá trị đúng hay sai?

```python
(3 + 4 - 5 + 18 // 4) in A
```

A. `True`.
B. `False`.
C. Không xác định.
D. Câu lệnh bị lỗi.

Lời giải
Ta tính giá trị biểu thức trước:

```python
3 + 4 - 5 + 18 // 4
= 7 - 5 + 4
= 2 + 4
= 6
```

Khi đó biểu thức trở thành:

```python
6 in A
```

Vì `6` có trong danh sách `A`, nên kết quả là `True`.
Chọn A

Câu 6. Lệnh nào sau đây xoá toàn bộ danh sách?
A. `clear()`.
B. `exit()`.
C. `remove()`.
D. `del()`.

Lời giải
Phương thức `clear()` dùng để xoá toàn bộ phần tử của danh sách, làm cho danh sách trở thành rỗng.

Ví dụ:

```python
A.clear()
```

Chọn A

Câu 7. Phát biểu nào sau đây là sai?
A. Sau khi thực hiện lệnh `clear()`, danh sách gốc trở thành rỗng.
B. Lệnh `remove()` có chức năng xoá một phần tử có giá trị cho trước.
C. Lệnh `remove()` xoá tất cả các phần tử có giá trị cho trước trong `list`.
D. `clear()` có tác dụng xoá toàn bộ các danh sách.

Lời giải
Lệnh `remove(x)` chỉ xoá **phần tử đầu tiên** có giá trị `x` trong danh sách, không xoá tất cả các phần tử cùng giá trị.

Ví dụ:

```python
A = [1, 2, 2, 3]
A.remove(2)
```

sau đó `A` trở thành:

```python
[1, 2, 3]
```

Vì vậy phát biểu sai là C.
Chọn C

Câu 8. Số phát biểu đúng là:

1. Sau khi thực hiện lệnh `clear()`, các phần tử trả về giá trị `0`.
2. Lệnh `remove` trả về giá trị `False` nếu không có trong danh sách.
3. `remove()` có tác dụng xoá một phần tử có giá trị cho trước trong `list`.
4. Lệnh `remove()` có tác dụng xoá một phần tử ở vị trí cho trước.

A. 1.
B. 2.
C. 0.
D. 3.

Lời giải
Xét từng phát biểu:

1. Sai, vì `clear()` làm danh sách rỗng chứ không biến các phần tử thành `0`.
2. Sai, vì nếu không tìm thấy giá trị cần xoá thì `remove()` báo lỗi, không trả về `False`.
3. Đúng, vì `remove()` xoá một phần tử có giá trị cho trước.
4. Sai, vì xoá theo vị trí là dùng `del`, `pop()`, không phải `remove()`.

Vậy chỉ có **1 phát biểu đúng**.
Chọn A

Câu 9. Sau khi thực hiện các câu lệnh sau, mảng `A` như thế nào?

```python
A = [1, 2, 3, 4, 5]
A.remove(2)
print(A)
```

A. `[1, 2, 3, 4]`.
B. `[2, 3, 4, 5]`.
C. `[1, 2, 4, 5]`.
D. `[1, 3, 4, 5]`.

Lời giải
Lệnh:

```python
A.remove(2)
```

xoá phần tử có **giá trị** bằng `2` trong danh sách `A`.

Ban đầu:

```python
[1, 2, 3, 4, 5]
```

sau khi xoá `2`, còn:

```python
[1, 3, 4, 5]
```

Chọn D

Câu 10. Phần tử thứ bao nhiêu trong mảng `A` bị xoá?

```python
A = [10, 20, 3, 30, 20, 30, 6, 3, 2, 8, 9]
A.remove(3)
print(A)
```

A. 2.
B. 3.
C. 8.
D. 4.

Lời giải
Lệnh `remove(3)` sẽ xoá **phần tử đầu tiên có giá trị bằng 3**.

Danh sách ban đầu:

```python
[10, 20, 3, 30, 20, 30, 6, 3, 2, 8, 9]
```

Phần tử `3` đầu tiên nằm ở **vị trí thứ 3** nếu đếm theo thứ tự 1, 2, 3, ...

Vì vậy phần tử bị xoá là phần tử thứ 3.
Chọn B

Câu 11. Kết quả khi thực hiện chương trình sau?

```python
A = [1, 2, 3, 5]
A.insert(2, 4)
print(A)
```

A. `1, 2, 3, 4`.
B. `1, 2, 4, 3, 5`.
C. `1, 2, 3, 4, 5`.
D. `1, 2, 4, 5`.

Lời giải
Lệnh:

```python
A.insert(2, 4)
```

chèn giá trị `4` vào vị trí chỉ số `2`.

Danh sách ban đầu:

```python
[1, 2, 3, 5]
```

Sau khi chèn, phần tử `4` đứng trước phần tử đang ở chỉ số `2` là `3`, nên kết quả là:

```python
[1, 2, 4, 3, 5]
```

Chọn B

Câu 12. Lệnh sau chèn phần tử cần thêm vào vị trí thứ mấy trong danh sách `A`?

```python
A.insert(-5, 3)
```

A. 3.
B. 1.
C. 0.
D. 2.

Lời giải
Theo đáp án trong tài liệu, lệnh này chèn phần tử vào **vị trí thứ nhất** của danh sách.

Trong Python, nếu chỉ số chèn âm và nhỏ hơn phạm vi hợp lệ, phần tử sẽ được chèn về đầu danh sách.
Vì vậy đáp án đúng là vị trí thứ 1.
Chọn B

Câu 13. Danh sách `A` trước và sau lệnh `insert()` là `[1, 3, 5, 0]` và `[1, 3, 4, 5, 0]`. Lệnh đã dùng là lệnh gì?
A. `insert(2, 4)`.
B. `insert(4, 2)`.
C. `insert(3, 4)`.
D. `insert(4, 3)`.

Lời giải
Muốn từ:

```python
[1, 3, 5, 0]
```

thành:

```python
[1, 3, 4, 5, 0]
```

thì phải chèn số `4` vào trước phần tử `5`, tức là tại vị trí chỉ số `2`.

Lệnh đúng là:

```python
insert(2, 4)
```

Chọn A

Câu 14. Danh sách `A` sau lệnh 1 lệnh `remove()` và 3 lệnh `append()` có 8 phần tử. Hỏi ban đầu danh sách `A` có bao nhiêu phần tử?
A. 8.
B. 7.
C. 4.
D. 6.

Lời giải
Gọi số phần tử ban đầu là `n`.

- Sau 1 lệnh `remove()`, số phần tử còn: `n - 1`
- Sau 3 lệnh `append()`, số phần tử là: `n - 1 + 3 = n + 2`

Theo đề bài:

```python
n + 2 = 8
```

Suy ra:

```python
n = 6
```

Chọn D

Câu 15. Chọn phát biểu sai trong các phát biểu sau khi nói về câu lệnh `insert` trong Python:
A. `insert(index, value)` sẽ chèn giá trị `value` vào danh sách tại vị trí `index` và đẩy các phần tử sang phải.
B. Nếu chỉ số chèn `< 0` thì chèn vào đầu danh sách.
C. Phần tử có chỉ số `k` sẽ được thay thế bởi phần tử thêm vào.
D. Nếu chỉ số chèn `> len(A)` thì chèn vào cuối danh sách.

Lời giải
Lệnh `insert()` là lệnh **chèn thêm phần tử**, không phải thay thế phần tử cũ.

Ví dụ:

```python
A = [1, 2, 3]
A.insert(1, 9)
```

thì `A` trở thành:

```python
[1, 9, 2, 3]
```

Phần tử cũ không bị thay thế, mà được dời sang phải.
Vì vậy phát biểu sai là C.
Chọn C
