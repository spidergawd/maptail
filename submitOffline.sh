while true
   do while read line;do echo $line >> ips.txt;sleep 0.25;done < ipsOffline.txt
done
