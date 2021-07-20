if [ ! -d ./_volume/mongo ]; then
 mkdir ./_volume;
 mkdir ./_volume/mongo;
fi

docker run --rm -it --name testMongo -p 27017:27017 -v $PWD/_volume/mongo:/data/db \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=ju1234 \
 mongo:4.4
