import psycopg2


def main():
    conn = psycopg2.connect('postgres://avnadmin:AVNS_7B0cSLjQLJzbNFzc1z5@pg-1295f7bc-mewwoof.c.aivencloud.com:23023/defaultdb?sslmode=require')

    query_sql = 'SELECT VERSION()'

    cur = conn.cursor()
    cur.execute(query_sql)

    version = cur.fetchone()[0]
    print(version)


if __name__ == "__main__":
    main()