#while read line;do dig $line +short >> ips.txt;sleep 2;done < domains.txt
while read line;do dig $line +short >> ips.txt;done < domains.txt
