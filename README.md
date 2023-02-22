tw-id-num
==========

[![CI](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml)

Check or generate Taiwan ID numbers.

檢查或是產生中華民國**國民身分證統一編號**(即**身份證字號**，而非營業人統一編號)，支援**新式外來人口統一證號**。也特別支援舊式外來人口統一證號的檢查。

## Usage

```typescript
import { Mode, check, generate, checkIncludingOldResidentID } from "tw-id-num";

const id = generate(Mode.National); // e.g. "A123456789"

console.log(check(id)); // true

console.log(checkIncludingOldResidentID("HD12345678")); // true
```

## Usage for Browsers

[Source](demo.html)

[Demo Page](https://rawcdn.githack.com/magiclen/ts-tw-id-num/master/demo.html)

## License

[MIT](LICENSE)