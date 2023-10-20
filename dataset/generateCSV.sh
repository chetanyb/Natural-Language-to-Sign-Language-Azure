#!/bin/bash

# Convert tab-separated values to comma-separated values
awk -F "\\t" 'BEGIN {OFS=","} {print $1, $2}' wlasl_class_list.txt > wlasl_class_list.csv
