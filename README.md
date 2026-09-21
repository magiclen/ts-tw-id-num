tw-id-num
==========

[![CI](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml)

Check or generate Taiwan ID numbers.

檢查或是產生中華民國**國民身分證統一編號**(即**身份證字號**，而非營業人統一編號)，支援**新式外來人口統一證號**。也特別支援舊式外來人口統一證號的檢查。

## Usage

```typescript
import { check, generate, parse } from "tw-id-num";

const id = generate(); // e.g. "A123456789"

console.log(check(id)); // true

console.log(parse(id)); // { type: "national", sex: "male", location: "A" }
```

There are three types of ID numbers.

| Type             | Description          |
| ---------------- | -------------------- |
| `"national"`     | 國民身分證統一編號   |
| `"resident"`     | 新式外來人口統一證號 |
| `"old-resident"` | 舊式外來人口統一證號 |

The text must be in uppercase without spaces. Use `text.trim().toUpperCase()` first if needed.

### Checking

`check` allows national and resident ID numbers by default. Pass a type or an array of types to change it.

```typescript
check("A123456789", "national"); // true
check("A800000014", "national"); // false

check("HD12345678"); // false
check("HD12345678", ["national", "resident", "old-resident"]); // true
```

### Parsing

`parse` returns the type, the sex, and the location letter of an ID number. It returns `null` if the ID number is not valid.

```typescript
parse("HD12345678"); // { type: "old-resident", sex: "female", location: "H" }
parse("A123456788"); // null
```

### Generating

`generate` returns a random national or resident ID number. Old resident ID numbers cannot be generated because they are no longer issued.

```typescript
generate({ type: "resident" }); // e.g. "A800000014"
generate({ sex: "female" }); // e.g. "A223456781"
generate({ type: "national", sex: "male", location: "L" }); // e.g. "L105926509"
```

L, R, S, and Y are no longer used for new ID numbers, so they can only be used for national ID numbers. If `location` is one of them and `type` is not set, a national ID number is generated.

## Migrating from 0.3.x

- Node.js 24 or later is required.
- The `Mode` and `Sex` enums are removed. Use strings instead, such as `"national"`, `"resident"`, `"male"`, and `"female"`.
- `check(text, Mode.National)` becomes `check(text, "national")`. `Mode.Default` is the default, so just use `check(text)`.
- `checkOldResidentID(text)` becomes `check(text, "old-resident")`.
- `checkIncludingOldResidentID(text)` becomes `check(text, ["national", "resident", "old-resident"])`.
- `generate(Mode.National, Sex.Male)` becomes `generate({ type: "national", sex: "male" })`.
- An unknown type or sex throws a `TypeError` instead of being treated as `Mode.Default`.

## Usage for Browsers

[Source](demo.html)

[Demo Page](https://rawcdn.githack.com/magiclen/ts-tw-id-num/master/demo.html)

## License

[MIT](LICENSE)
