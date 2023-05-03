
PGHOST=localhost
PGPORT=5432
PGDATABASE=pokemon_db
PGUSER=postgres
PGPASSWORD=password


psql -h $PGHOST -p $PGPORT -d $PGDATABASE -U $PGUSER -f ./server/seed-data/pokemon_types.sql
psql -h $PGHOST -p $PGPORT -d $PGDATABASE -U $PGUSER -f ./server/seed-data/pokemon.sql
psql -h $PGHOST -p $PGPORT -d $PGDATABASE -U $PGUSER -f ./server/seed-data/type_weakness.sql
psql -h $PGHOST -p $PGPORT -d $PGDATABASE -U $PGUSER -f ./server/seed-data/type_resistance.sql
