/* terra:network */
export const FINDER = "https://finder.terra.money"
export const EXTENSION = "https://terra.money/extension"
export const CHROME = "https://google.com/chrome"

/* terra:configs */
export const BLOCK_TIME = 6650 // 6.65s

/* mirror:unit */
export const SMALLEST = 1e6
export const MIR = "MIR"
export const UUSD = "uusd"
export const UST = "UST"
export const LP = "LP"

/* mirror:configs */
export const MAX_SPREAD = 0.01
export const MAX_MSG_LENGTH = 1024
export const COMMISSION = 0.003

/* network:settings */
export const TX_POLLING_INTERVAL = 1000
export const DEFAULT_EXT_NETWORK: ExtNetworkConfig = {
  name: "mainnet",
  chainID: "columbus-4",
  lcd: "https://lcd.terra.dev",
}

/* sentry */
export const DSN =
  "https://b1532961e54e491fbb57e67805cb36a4@o247107.ingest.sentry.io/5540998"