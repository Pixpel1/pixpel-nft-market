set +x

# Install typegen code generator
npm install --global openapi-client-axios-typegen
#Run typegen on the swagger json specs, write to AxiosClient class file
typegen src/dex/api-query/__generated__/openapi.json > ./src/dex/api-query/__generated__/AxiosClient.ts

# Edit client
sed -i -e "s/export type Client/export type AxiosClient/"  ./src/dex/api-query/__generated__/AxiosClient.ts
sed -i -e "s/declare namespace Components/export declare namespace Components/"  ./src/dex/api-query/__generated__/AxiosClient.ts
sed -i -e "s/declare namespace Paths/export declare namespace Paths/"  ./src/dex/api-query/__generated__/AxiosClient.ts
