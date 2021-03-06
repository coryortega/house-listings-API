module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './database/doggo-base.db3'
      },
      migrations: {
        directory: "./database/migrations"
      },
      seeds: {
        directory: "./database/seeds"
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        }
      }
    },
  
    testing: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./database/testing.db3"
      },
      migrations: {
        directory: "./database/migrations"
      },
      seeds: {
        directory: "./database/seeds"
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done);
        }
      }
    },
  
    production: {
      // client: "pg",
      // connection: process.env.DATABASE_URL,
      client: 'postgresql',
      connection: { 
          connectionString: process.env.DATABASE_URL,
          ssl: { rejectUnauthorized: false }
      },
      migrations: {
        directory: "./database/migrations"
      },
      seeds: {
        directory: "./database/seeds"
      },
      pool: {
        min: 2,
        max: 10
      },
    }
  };
  