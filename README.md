# shuttlecock
Manage shuttlecock stock and other related stuff

```
docker run --name shuttlebackdb \
  -p 55432:5432 \
  -e POSTGRES_PASSWORD=jeanchon \
  -e POSTGRES_USER=shuttleback \
  -e POSTGRES_DB=shuttlecock \
  -d postgres
```

```
(cd backend/shuttleback && python manage.py migrate)
```
