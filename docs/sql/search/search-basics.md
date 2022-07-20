# 查询数据

## 基本查询

查询数据库表的数据，使用如下的SQL语句

>SELECT * FROM <表名>

假设表名是students，需要查询students表的所有记录，使用如下的SQL语句

```sql
SELECT * FROM students;
```

其中SELECT是关键字，*表示“所有列”，FROM表示从哪个表查询

## 条件查询

很多时候，不需要获得一张表所有的记录，而是根据条件选择性地获取指定条件的记录。  
SELECT语句可以通过WHERE条件来设定查询条件，查询结果是满足查询条件的记录。  
比如指定条件“分数在80分或以上的学生”

```sql
SELECT * FROM students WHERE score >= 80
```

WHERE关键字后面的score >= 80是条件，score是列名  
由此我们可以知道条件查询的语法是：  

> SELECT * FROM <表名> WHERE <条件表达式>

条件表达式可以用<条件1>AND<条件2>表达满足条件1并且满足条件2。例如，符合条件“分数在80分或以上”，并且还符合条件“男生”

+ 条件1：根据score列的数据判断：score >= 80;
+ 条件2：根据gender列的数据判断：gender = 'M',注意gender列存储的是字符串，需要用单引号括起来

可以写出WHERE条件：score >= 80 AND gender = 'M'  

```sql
SELECT * FROM student WHERE score >= 80 AND gender = 'M';
```

如果只需要满足条件1或条件2中的一种的话，可以把AND查询的两个条件改为OR

```sql
SELECT * FROM student WHERE score >= 80 OR gender = 'M';
```

+ 条件3：NOT<条件>，表示“不符合该条件”的记录。例如，条件是“不是二班的学生”，可以先写出“是二班的学生”：class_id = 2,再加上NOT：NOT class_id = 2

```sql
SELECT * FROM students WHERE NOT class_id = 2;
```

需要注意的是`NOT class_id = 2`等价于`class_id<>2  `
如果要组合三个或更多的条件，需要用小括号（）表示如何进行条件运算。如查询：分数在80以下或80以上的男生  

```sql
SELECT * FROM students WHERE (score < 80 OR score > 90) AND gender = 'M';
```
