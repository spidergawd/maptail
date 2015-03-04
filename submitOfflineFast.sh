while true
   do while read line;do echo $line >> ips.txt;done < ipsOffline.txt
done
