tw-id-num
==========

[![CI](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/ts-tw-id-num/actions/workflows/ci.yml)

Check or generate Taiwan ID numbers.

檢查或是產生中華民國**國民身分證統一編號**(即**身份證字號**，而非營業人統一編號)，支援**新式外來人口統一證號**。特別支援舊式外來人口統一證號的檢查。

## Usage

```typescript
import { Mode, check, generate } from "tw-id-num";

const id = generate(Mode.National); // e.g. "A123456789"

console.log(check(id)); // true
```

## Usage for Browsers

```html
<script src="https://cdn.jsdelivr.net/gh/magiclen/ts-tw-id-num/dist/tw-id-num.min.js"></script>
<script>
    const id = TWIDNum.generate(TWIDNum.Mode.National); // e.g. "A123456789"

    console.log(TWIDNum.check(id)); // true
</script>
```

## License

[MIT](LICENSE)