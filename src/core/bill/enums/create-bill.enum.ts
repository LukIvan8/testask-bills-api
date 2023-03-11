export enum TRANSACTION_TYPE_ENUM {
  INTERNET=1,
  COMMUNAL=2,
  EDUCATION=3
}
export type TRANSCTION_TYPE = `${TRANSACTION_TYPE_ENUM}`

export enum PROVIDER_ENUM {
  FREGAT=1,
  KIEVSTAR=2,
  UKRTELEKOM=3,
  COMPROV_1=4,
  COMPROV_2=5,
  COMPROV_3=6,
  EDUPROV_1=7,
  EDUPROV_2=8,
  EDUPROV_3=9,
}


export type PROVIDER_TYPE = `${PROVIDER_ENUM}`