export PATH=/home/david/dev/maptail/maptail/bin:$PATH
tail -F /home/david/dev/maptail/maptail/ips.txt | maptail --ttl 3 --maxage 3 -h 127.0.0.1 -p 3000 
