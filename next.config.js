const {i18n} = require('./next-i18next.config')

module.exports = {
  i18n,
  productionBrowserSourceMaps: true,
  env: {
    SPREADSHEET_ID: "1bnwCN6qHqOZKugYnxlEFIT3JFgYdJ4X6f-LTwbPu99U",
    SHEET_ID: "0",
    CLIENT_EMAIL: "isaldigitalform@isaldigital-form.iam.gserviceaccount.com",
    PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDjSFidKStFDmgL\nOI/mL51x0W3g0SG33GBDhN4I98IeRJ6EujtXKAJf8R6X18upgswdYqk1LUJLy7Fc\niBVnGgU0/MnG/Y4y4tiIEDWaXnSX9bCmYkhfEGtwTtLopF3/cxcrb9Sesl2IMsnu\nUDwx7QHUp5eMLATkj4hnnjSEUGQMNYzWjhsZbtsOW1YVlAODxthsLPToGZyTD+iw\ny+pDspYVXZ6TuAoL0CKzqy8CWUbBQDkZ+c0izfkKP7we0xbMKkejJTddacqiDJc8\nFHJ/5XpL3MkMYuPQ/zPqe5qR/fg8u/DTudSybQGG+DkUK9Rdo3Y5WrMeocV3HfD8\niuBtuyFNAgMBAAECggEABk/QBi1KglRwFz+u31mbKboDLycfpJd+JOHfuKgIwAZv\n0IfLdhQqXLe5fcYEZeS3/mjrAgsLuEcj2cn9ritO0bXjdJ89/7PFB6JLmsncuwub\nqEM6d0lhcnD98m/+HEX58r7cTLvvVQT0DqYzxb8rOdidoMroJ+DEjPwbwUDqRlx4\n8uvkbuiWwCGX3JcGxAoo2kxvTrGPZQyDUCx/22uqWRmfXiyoGHbx6I8DJTLY6mVy\nXOVAK+UbSoH4pNKd1U01kxCWk1S7qIvZGGDfpdAFRk+sbA0s0knW+zX+OtTix0hv\nxFT7ZXK6mVVtDgzYeEljRORjXhsvBxJDLfFHZJM7EQKBgQDzKYy+n32HqdoOzyN3\ntH/RoSxoUTvcIt4hzyVfIrMxNUgawwJHxKpdqQQXK4gZVDJ3C/DXWhNiRyS+ydAE\nSPeVP9I9qKjJkcrwM2sGsq7iH7EBMIcXWiK+Q7qmm6kbLqKBRp1aupH2cyH2jvcX\nqAoshoyDR8YsGJk1qTtpc79uXwKBgQDvSCzGa7ukT6OZrP775+dAriBkw8FTe3XO\nGWDFp4j9zhVy9vdEpu5MJPeXhzR3hOo0gN4MsOsXGQLqXz5WmmaeGDBsftaGyo8Q\nxx5yLOiEJvlSTml15MOGYfmTop93wbDrOSxEvQrcXqoJxIRG9XpnwpuDUkd3SzUV\nUY7a3Xt30wKBgAt38zZuaUpDvZAjPuX/cmPduS12X19jmZx4m6egCFmSzMLOXcYq\nxWpDdXjuSa4AJZ0tx/8wNWfWOSpydEgvdNXqO61CzisroCmyEyMuvEbX/c4zjruQ\nOcFFioEfKFuq2GlGfldwI0A/b+OkHI1WFJzC/8+VTAh6ZId+Ytn3Zpj7AoGBALGV\nARXpUoMpT6N3jm1puGh6UjQ2S74nPFDO6NEH+1VRov2FaBGdSfFc5huhDkE9dYut\nsB3/Fxo3R8ClGuCvCkV+ckGzCIdUwUSUYnYd+hpJynNZGk+SjcGn6M+2u17ncuO/\ntKj3G55c6xkAraLz//oNpdiaMcvJFwZRVxH7mexdAoGBAJWNiXSfVpAGELA8vgzg\nE9Z5S2gnH/3mNXxm2f4vf7ZNIJ4K+r5fLOQ3FsME0SHgZ8JCRZkAnpgSluzbratu\nmcYA/9K8i+3xXgqH9O5/CMyo+p7th9K6LpRLK7NXLqCBrycKynvqmIGEzMy7WqwL\niefCZsRZv5PCposWY7vMSZId\n-----END PRIVATE KEY-----\n",
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};
