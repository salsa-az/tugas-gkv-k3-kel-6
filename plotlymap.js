    var loc = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 
                'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
                'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia (Plurinational State of)', 
                'Bosnia and Herzegovina', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 
                'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 
                'Chad', 'Chile', 'China, mainland', 'China, Hong Kong SAR', 'China, Taiwan Province of', 
                'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 
                'Dem. Rep. Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 
                'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 
                'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 
                'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 
                'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 
                'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 
                'Kiribati', 'Botswana', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 
                'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 
                'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 
                'Micronesia', 'Moldova', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 
                'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 
                'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 
                'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 
                'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 
                'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
                'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 
                'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 
                'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 
                'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 
                'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Western Sahara', 'Yemen',
                'Zambia', 'Zimbabwe', 'Kosovo'];
                
                
                
                var data2009 = {
                'Afghanistan': '0', 'Albania': 0, 'Algeria': 1, 'Angola': '0', 'Argentina': '0', 'Armenia': 0,
                'Australia': '0', 'Austria': 0, 'Azerbaijan': '0', 'Bahamas': '0', 'Bahrain': '0', 'Bangladesh': 964,
                'Barbados': 0, 'Belarus': 0, 'Belgium': 70, 'Belize': '0', 'Benin': '0', 'Bhutan': '0',
                'Bolivia (Plurinational State of)': 3, 'Bosnia and Herzegovina': '0', 'Brazil': '0', 'Brunei Darussalam': 7,
                'Bulgaria': 7, 'Burkina Faso': 22, 'Burundi': '0', 'Cambodia': 162, 'Cameroon': '0', 'Canada': '0',
                'Cape Verde': '0', 'Central African Republic': '0', 'Chad': '0', 'Chile': '0', 'China, mainland': 11940,
                'China, Hong Kong SAR': 0, 'China, Taiwan Province of': 31, 'Colombia': 78, 'Comoros': '0', 'Congo': '0',
                'Costa Rica': '0', 'Croatia': '0', 'Cuba': 142, 'Cyprus': 0, 'Czechia': 3, 'Dem. Rep. Congo': '0',
                'Denmark': 3, 'Djibouti': '0', 'Dominican Republic': '0', 'Ecuador': '0', 'Egypt': 110, 'El Salvador': '0',
                'Equatorial Guinea': '0', 'Eritrea': '0', 'Estonia': '0', 'Eswatini': '0', 'Ethiopia': '0',
                'Fiji': 0, 'Finland': '0', 'France': 82, 'Gabon': '0', 'Gambia': '0', 'Georgia': 1, 'Germany': 18,
                'Ghana': '0', 'Greece': 12, 'Grenada': '0', 'Guatemala': '0', 'Guinea': '0', 'Guinea-Bissau': 3,
                'Guyana': 67, 'Haiti': '0', 'Honduras': '0', 'Hungary': 6, 'Iceland': 0, 'India': 1810, 'Indonesia': 1626,
                'Iran (Islamic Republic of)': 534, 'Iraq': '0', 'Ireland': 4, 'Israel': '0', 'Italy': 31, 'Ivory Coast': 183,
                'Jamaica': 3, 'Japan': 99, 'Jordan': '0', 'Kazakhstan': 1, 'Kenya': '0', 'Kiribati': 0, 'Botswana': '0',
                'North Korea': 156, 'South Korea': '0', 'Kuwait': '0', 'Kyrgyzstan': '0', 'Laos': 210, 'Latvia': 0,
                'Lebanon': '0', 'Lesotho': '0', 'Liberia': 19, 'Libya': '0', 'Lithuania': 0, 'Luxembourg': '0',
                'Madagascar': 510, 'Malawi': '0', 'Malaysia': 50, 'Maldives': '0', 'Mali': '0', 'Malta': '0',
                'Marshall Islands': '0', 'Mauritania': '0', 'Mauritius': '0', 'Mexico': '0', 'Micronesia': '0',
                'Moldova': '0', 'Mongolia': '0', 'Montenegro': '0', 'Morocco': '0', 'Mozambique': '0', 'Myanmar': 8532,
                'Namibia': '0', 'Nauru': '0', 'Nepal': 386, 'Netherlands': 51, 'New Zealand': '0', 'Nicaragua': '0',
                'Niger': 39, 'Nigeria': '0', 'North Macedonia': '0', 'Norway': 1, 'Oman': '0', 'Pakistan': '0',
                'Palau': '0', 'Panama': '0', 'Papua New Guinea': '0', 'Paraguay': '0', 'Peru': '0', 'Philippines': 355,
                'Poland': 7, 'Portugal': '0', 'Qatar': '0', 'Romania': '0', 'Russia': '0', 'Rwanda': '0',
                'Saint Kitts and Nevis': '0', 'Saint Lucia': 0, 'Saint Vincent and the Grenadines': '0', 'Samoa': '0',
                'San Marino': '0', 'Sao Tome and Principe': '0', 'Saudi Arabia': 2, 'Senegal': '0', 'Serbia': '0',
                'Seychelles': '0', 'Sierra Leone': '0', 'Singapore': '0', 'Slovakia': 8, 'Slovenia': '0',
                'Solomon Islands': '0', 'Somalia': '0', 'South Africa': '0', 'South Sudan': '0', 'Spain': 1,
                'Sri Lanka': '0', 'Sudan': '0', 'Suriname': 35, 'Sweden': 0, 'Switzerland': 65, 'Syria': '0',
                'Taiwan': '0', 'Tajikistan': '0', 'Tanzania': '0', 'Thailand': 2142, 'Timor-Leste': 4,
                'Togo': '0', 'Tonga': '0', 'Trinidad and Tobago': 4, 'Tunisia': '0', 'Turkey': 0, 'Turkmenistan': '0', 'Tuvalu': '0', 'Uganda': '0', 'Ukraine': '0', 'United Arab Emirates': 15,
                'United Kingdom': 11, 'United States': '0', 'Uruguay': '0', 'Uzbekistan': 0, 'Vanuatu': '0',
                'Vatican City': '0', 'Venezuela': 90, 'Vietnam': '0', 'Western Sahara': 0, 'Yemen': 0,
                'Zambia': 0, 'Zimbabwe': 0, 'Kosovo': 0
                };

                
                
                var data2010 = {
                    'Afghanistan': 0, 'Albania': 0, 'Algeria': 1, 'Angola': 0, 'Argentina': 0, 'Armenia': 0,
                    'Australia': 0, 'Austria': 0, 'Azerbaijan': 0, 'Bahamas': 0, 'Bahrain': 0, 'Bangladesh': 1003,
                    'Barbados': 0, 'Belarus': 0, 'Belgium': 70, 'Belize': 0, 'Benin': 0, 'Bhutan': 0,
                    'Bolivia (Plurinational State of)': 3, 'Bosnia and Herzegovina': 0, 'Brazil': 0, 'Brunei Darussalam': 8,
                    'Bulgaria': 1, 'Burkina Faso': 28, 'Burundi': 0, 'Cambodia': 210, 'Cameroon': 0, 'Canada': 0,
                    'Cape Verde': 0, 'Central African Republic': 0, 'Chad': 0, 'Chile': 0, 'China, mainland': 11468,
                    'China, Hong Kong SAR': 0, 'China, Taiwan Province of': 74, 'Colombia': 49, 'Comoros': 0, 'Congo': 0,
                    'Costa Rica': 0, 'Croatia': 0, 'Cuba': 58, 'Cyprus': 0, 'Czechia': 3, 'Dem. Rep. Congo': 0,
                    'Denmark': 2, 'Djibouti': 0, 'Dominican Republic': 0, 'Ecuador': 0, 'Egypt': 87, 'El Salvador': 0,
                    'Equatorial Guinea': 0, 'Eritrea': 0, 'Estonia': 0, 'Eswatini': 0, 'Ethiopia': 0,
                    'Fiji': 2, 'Finland': 0, 'France': 81, 'Gabon': 0, 'Gambia': 0, 'Georgia': 0, 'Germany': 13,
                    'Ghana': 0, 'Greece': 11, 'Grenada': 0, 'Guatemala': 0, 'Guinea': 0, 'Guinea-Bissau': 3,
                    'Guyana': 69, 'Haiti': 0, 'Honduras': 0, 'Hungary': 5, 'Iceland': 0, 'India': 1920, 'Indonesia': 1713,
                    'Iran (Islamic Republic of)': 534, 'Iraq': 0, 'Ireland': 4, 'Israel': 0, 'Italy': 30, 'Ivory Coast': 145,
                    'Jamaica': 6, 'Japan': 77, 'Jordan': 0, 'Kazakhstan': 1, 'Kenya': 0, 'Kiribati': 0, 'Botswana': 0,
                    'North Korea': 162, 'South Korea': 0, 'Kuwait': 0, 'Kyrgyzstan': 0, 'Laos': 205, 'Latvia': 0,
                    'Lebanon': 0, 'Lesotho': 0, 'Liberia': 19, 'Libya': 0, 'Lithuania': 0, 'Luxembourg': 0,
                    'Madagascar': 534, 'Malawi': 0, 'Malaysia': 49, 'Maldives': 0, 'Mali': 0, 'Malta': 0,
                    'Marshall Islands': 0, 'Mauritania': 0, 'Mauritius': 0, 'Mexico': 0, 'Micronesia': 0,
                    'Moldova': 0, 'Mongolia': 0, 'Montenegro': 0, 'Morocco': 0, 'Mozambique': 0, 'Myanmar': 8608,
                    'Namibia': 0, 'Nauru': 0, 'Nepal': 370, 'Netherlands': 50, 'New Zealand': 0, 'Nicaragua': 0,
                    'Niger': 32, 'Nigeria': 0, 'North Macedonia': 2, 'Norway': 0, 'Oman': 0, 'Pakistan': 0,
                    'Palau': 0, 'Panama': 0, 'Papua New Guinea': 0, 'Paraguay': 0, 'Peru': 0, 'Philippines': 344,
                    'Poland': 8, 'Portugal': 0, 'Qatar': 0, 'Romania': 0, 'Russia': 0, 'Rwanda': 0,
                    'Saint Kitts and Nevis': 0, 'Saint Lucia': 0, 'Saint Vincent and the Grenadines': 0, 'Samoa': 0,
                    'San Marino': 0, 'Sao Tome and Principe': 0, 'Saudi Arabia': 1, 'Senegal': 0, 'Serbia': 0,
                    'Seychelles': 0, 'Sierra Leone': 0, 'Singapore': 0, 'Slovakia': 8, 'Slovenia': 0,
                    'Solomon Islands': 0, 'Somalia': 0, 'South Africa': 0, 'South Sudan': 0, 'Spain': 1,
                    'Sri Lanka': 0, 'Sudan': 0, 'Suriname': 6, 'Sweden': 0, 'Switzerland': 81, 'Syria': 0,
                    'Taiwan': 0, 'Tajikistan': 0, 'Tanzania': 0, 'Thailand': 2295, 'Timor-Leste': 4,
                    'Togo': 0, 'Tonga': 0, 'Trinidad and Tobago': 3, 'Tunisia': 0, 'Turkey': 0, 'Turkmenistan': 1, 'Tuvalu': 0,
                    'Uganda': 0, 'Ukraine': 0, 'United Arab Emirates': 3, 'United Kingdom': 11, 'United States': 0,
                    'Uruguay': 0, 'Uzbekistan': 1, 'Vanuatu': 1, 'Vatican City': 0, 'Venezuela': 79, 'Vietnam': 2388, 'Western Sahara': 0, 'Yemen': 0,
                    'Zambia': 0, 'Zimbabwe': 0, 'Kosovo': 0
                };
                
                var data2011 = {
                    'Afghanistan': 0, 'Albania': 0, 'Algeria': 6, 'Angola': 0, 'Argentina': 0, 'Armenia': 0,
                    'Australia': 0, 'Austria': 0, 'Azerbaijan': 0, 'Bahamas': 0, 'Bahrain': 0, 'Bangladesh': 1014,
                    'Barbados': 0, 'Belarus': 0, 'Belgium': 58, 'Belize': 0, 'Benin': 0, 'Bhutan': 0,
                    'Bolivia (Plurinational State of)': 3, 'Bosnia and Herzegovina': 0, 'Brazil': 0, 'Brunei Darussalam': 6,
                    'Bulgaria': 5, 'Burkina Faso': 34, 'Burundi': 0, 'Cambodia': 187, 'Cameroon': 0, 'Canada': 0,
                    'Cape Verde': 0, 'Central African Republic': 0, 'Chad': 0, 'Chile': 0, 'China, mainland': 11589,
                    'China, Hong Kong SAR': 0, 'China, Taiwan Province of': 72, 'Colombia': 49, 'Comoros': 0, 'Congo': 0,
                    'Costa Rica': 0, 'Croatia': 0, 'Cuba': 142, 'Cyprus': 0, 'Czechia': 3, 'Dem. Rep. Congo': 0,
                    'Denmark': 3, 'Djibouti': 0, 'Dominican Republic': 0, 'Ecuador': 0, 'Egypt': 114, 'El Salvador': 0,
                    'Equatorial Guinea': 0, 'Eritrea': 0, 'Estonia': 0, 'Eswatini': 0, 'Ethiopia': 0,
                    'Fiji': 3, 'Finland': 0, 'France': 91, 'Gabon': 0, 'Gambia': 0, 'Georgia': 0, 'Germany': 12,
                    'Ghana': 0, 'Greece': 6, 'Grenada': 0, 'Guatemala': 0, 'Guinea': 0, 'Guinea-Bissau': 3,
                    'Guyana': 66, 'Haiti': 0, 'Honduras': 0, 'Hungary': 7, 'Iceland': 0, 'India': 2106, 'Indonesia': 1879,
                    'Iran (Islamic Republic of)': 534, 'Iraq': 0, 'Ireland': 4, 'Israel': 0, 'Italy': 18, 'Ivory Coast': 200,
                    'Jamaica': 13, 'Japan': 210, 'Jordan': 0, 'Kazakhstan': 1, 'Kenya': 0, 'Kiribati': 0, 'Botswana': 0,
                    'North Korea': 165, 'South Korea': 0, 'Kuwait': 0, 'Kyrgyzstan': 0, 'Laos': 204, 'Latvia': 0,
                    'Lebanon': 0, 'Lesotho': 0, 'Liberia': 19, 'Libya': 0, 'Lithuania': 0, 'Luxembourg': 0,
                    'Madagascar': 416, 'Malawi': 0, 'Malaysia': 52, 'Maldives': 0, 'Mali': 0, 'Malta': 0,
                    'Marshall Islands': 0, 'Mauritania': 0, 'Mauritius': 0, 'Mexico': 0, 'Micronesia': 0,
                    'Moldova': 0, 'Mongolia': 0, 'Montenegro': 0, 'Morocco': 0, 'Mozambique': 0, 'Myanmar': 7786,
                    'Namibia': 0, 'Nauru': 0, 'Nepal': 392, 'Netherlands': 39, 'New Zealand': 0, 'Nicaragua': 0,
                    'Niger': 23, 'Nigeria': 0, 'North Macedonia': 2, 'Norway': 0, 'Oman': 1, 'Pakistan': 0,
                    'Palau': 0, 'Panama': 0, 'Papua New Guinea': 0, 'Paraguay': 0, 'Peru': 0, 'Philippines': 364,
                    'Poland': 10, 'Portugal': 0, 'Qatar': 0, 'Romania': 0, 'Russia': 0, 'Rwanda': 0,
                    'Saint Kitts and Nevis': 0, 'Saint Lucia': 0, 'Saint Vincent and the Grenadines': 0, 'Samoa': 0,
                    'San Marino': 0, 'Sao Tome and Principe': 0, 'Saudi Arabia': 1, 'Senegal': 0, 'Serbia': 0,
                    'Seychelles': 0, 'Sierra Leone': 0, 'Singapore': 0, 'Slovakia': 8, 'Slovenia': 0,
                    'Solomon Islands': 0, 'Somalia': 0, 'South Africa': 0, 'South Sudan': 0, 'Spain': 1,'Sri Lanka': 0, 'Sudan': 0, 
                    'Suriname': 6, 'Sweden': 1, 'Switzerland': 91, 'Syria': 0,
                    'Taiwan': 0, 'Tajikistan': 0, 'Tanzania': 0, 'Thailand': 2410, 'Timor-Leste': 3,
                    'Togo': 0, 'Tonga': 0, 'Trinidad and Tobago': 1, 'Tunisia': 0, 'Turkey': 0, 'Turkmenistan': 1, 'Tuvalu': 0,
                    'Uganda': 0, 'Ukraine': 0, 'United Arab Emirates': 13, 'United Kingdom': 14, 'United States': 0,
                    'Uruguay': 0, 'Uzbekistan': 1, 'Vanuatu': 0, 'Vatican City': 0, 'Venezuela': 56, 'Vietnam': 2526, 'Western Sahara': 0, 'Yemen': 0,
                    'Zambia': 0, 'Zimbabwe': 0, 'Kosovo': 0
                    };
                
                    var data2012 = {
                        'Afghanistan': 0, 'Albania': 0, 'Algeria': 2, 'Angola': 0, 'Argentina': 0, 'Armenia': 0,
                        'Australia': 0, 'Austria': 0, 'Azerbaijan': 0, 'Bahamas': 0, 'Bahrain': 0, 'Bangladesh': 1011,
                        'Barbados': 0, 'Belarus': 0, 'Belgium': 62, 'Belize': 0, 'Benin': 0, 'Bhutan': 0,
                        'Bolivia (Plurinational State of)': 0, 'Bosnia and Herzegovina': 0, 'Brazil': 0, 'Brunei Darussalam': 6,
                        'Bulgaria': 2, 'Burkina Faso': 34, 'Burundi': 0, 'Cambodia': 189, 'Cameroon': 0, 'Canada': 0,
                        'Cape Verde': 0, 'Central African Republic': 0, 'Chad': 0, 'Chile': 0, 'China, mainland': 12100,
                        'China, Hong Kong SAR': 0, 'China, Taiwan Province of': 94, 'Colombia': 49, 'Comoros': 0, 'Congo': 0,
                        'Costa Rica': 0, 'Croatia': 0, 'Cuba': 104, 'Cyprus': 0, 'Czechia': 5, 'Dem. Rep. Congo': 0,
                        'Denmark': 2, 'Djibouti': 0, 'Dominican Republic': 0, 'Ecuador': 0, 'Egypt': 118, 'El Salvador': 0,
                        'Equatorial Guinea': 0, 'Eritrea': 0, 'Estonia': 0, 'Eswatini': 0, 'Ethiopia': 0,
                        'Fiji': 2, 'Finland': 0, 'France': 99, 'Gabon': 0, 'Gambia': 0, 'Georgia': 0, 'Germany': 7,
                        'Ghana': 0, 'Greece': 1, 'Grenada': 0, 'Guatemala': 0, 'Guinea': 0, 'Guinea-Bissau': 3,
                        'Guyana': 71, 'Haiti': 0, 'Honduras': 0, 'Hungary': 5, 'Iceland': 0, 'India': 2105, 'Indonesia': 1873,
                        'Iran (Islamic Republic of)': 534, 'Iraq': 0, 'Ireland': 4, 'Israel': 0, 'Italy': 12, 'Ivory Coast': 211,
                        'Jamaica': 1, 'Japan': 157, 'Jordan': 0, 'Kazakhstan': 1, 'Kenya': 0, 'Kiribati': 0, 'Botswana': 0,
                        'North Korea': 191, 'South Korea': 0, 'Kuwait': 0, 'Kyrgyzstan': 0, 'Laos': 233, 'Latvia': 0,
                        'Lebanon': 3, 'Lesotho': 0, 'Liberia': 19, 'Libya': 0, 'Lithuania': 0, 'Luxembourg': 0,
                        'Madagascar': 501, 'Malawi': 0, 'Malaysia': 52, 'Maldives': 0, 'Mali': 0, 'Malta': 0,
                        'Marshall Islands': 0, 'Mauritania': 0, 'Mauritius': 0, 'Mexico': 0, 'Micronesia': 0,
                        'Moldova': 0, 'Mongolia': 0, 'Montenegro': 0, 'Morocco': 0, 'Mozambique': 0, 'Myanmar': 7786,
                        'Namibia': 0, 'Nauru': 0, 'Nepal': 392, 'Netherlands': 39, 'New Zealand': 0, 'Nicaragua': 0,
                        'Niger': 23, 'Nigeria': 1062, 'Norway': 0, 'Oman': 0, 'Pakistan': 2426, 'Palau': 0,
                        'Panama': 0, 'Papua New Guinea': 1, 'Paraguay': 0, 'Peru': 1, 'Philippines': 485, 'Poland': 1,
                        'Portugal': 1, 'Qatar': 0, 'Romania': 0, 'Russian Federation': 0, 'Rwanda': 11, 'Samoa': 0,
                        'Saudi Arabia': 0, 'Senegal': 0, 'Serbia': 0, 'Seychelles': 0, 'Sierra Leone': 56, 'Singapore': 0,
                        'Slovakia': 0, 'Slovenia': 0, 'Solomon Islands': 0, 'Somalia': 8, 'South Africa': 24, 'South Sudan': 0,
                        'Spain': 7, 'Sri Lanka': 13, 'St. Kitts and Nevis': 0, 'St. Lucia': 0, 'St. Vincent and the Grenadines': 0,
                        'Sudan': 0, 'Suriname': 0, 'Sweden': 1, 'Switzerland': 0, 'Syrian Arab Republic': 0, 'Tajikistan': 0,
                        'Thailand': 301, 'North Macedonia': 0, 'Timor-Leste': 0, 'Togo': 0, 'Tonga': 0, 'Trinidad and Tobago': 0,
                        'Tunisia': 0, 'Turkey': 0, 'Turkmenistan': 0, 'Tuvalu': 0, 'Uganda': 0, 'Ukraine': 0, 'United Arab Emirates': 0,
                        'United Kingdom': 3, 'United Republic of Tanzania': 0, 'United States of America': 26, 'Uruguay': 0,
                        'Uzbekistan': 0, 'Vanuatu': 0, 'Venezuela (Bolivarian Republic of)': 0, 'Viet Nam': 134, 'Western Sahara': 0, 'Yemen': 0,
                        'Zambia': 0, 'Zimbabwe': 0, 'Kosovo': 0
                    };

                    var data2013 = {
                        'Afghanistan': 0, 'Albania': 0, 'Algeria': 0, 'Angola': 0, 'Argentina': 0, 'Armenia': 0,
                        'Australia': 0, 'Austria': 0, 'Azerbaijan': 0, 'Bahamas': 0, 'Bahrain': 0, 'Bangladesh': 1444,
                        'Barbados': 0, 'Belarus': 0, 'Belgium': 25, 'Belize': 0, 'Benin': 0, 'Bhutan': 0,
                        'Bolivia (Plurinational State of)': 0, 'Bosnia and Herzegovina': 0, 'Brazil': 0, 'Brunei Darussalam': 13,
                        'Bulgaria': 0, 'Burkina Faso': 48, 'Burundi': 0, 'Cambodia': 191, 'Cameroon': 0, 'Canada': 0,
                        'Cape Verde': 0, 'Central African Republic': 0, 'Chad': 0, 'Chile': 0, 'China, mainland': 11200,
                        'China, Hong Kong SAR': 0, 'China, Taiwan Province of': 82, 'Colombia': 42, 'Comoros': 0, 'Congo': 0,
                        'Costa Rica': 0, 'Croatia': 0, 'Cuba': 97, 'Cyprus': 0, 'Czechia': 4, 'Dem. Rep. Congo': 0,
                        'Denmark': 3, 'Djibouti': 0, 'Dominican Republic': 0, 'Ecuador': 0, 'Egypt': 116, 'El Salvador': 0,
                        'Equatorial Guinea': 0, 'Eritrea': 0, 'Estonia': 0, 'Eswatini': 0, 'Ethiopia': 0,
                        'Fiji': 2, 'Finland': 0, 'France': 96, 'Gabon': 0, 'Gambia': 0, 'Georgia': 0, 'Germany': 5,
                        'Ghana': 0, 'Greece': 2, 'Grenada': 0, 'Guatemala': 0, 'Guinea': 0, 'Guinea-Bissau': 3,
                        'Guyana': 54, 'Haiti': 0, 'Honduras': 0, 'Hungary': 5, 'Iceland': 0, 'India': 1787, 'Indonesia': 1801,
                        'Iran (Islamic Republic of)': 510, 'Iraq': 0, 'Ireland': 4, 'Israel': 0, 'Italy': 12, 'Ivory Coast': 210,
                        'Jamaica': 1, 'Japan': 132, 'Jordan': 0, 'Kazakhstan': 0, 'Kenya': 0, 'Kiribati': 0, 'Botswana': 0,
                        'North Korea': 202, 'South Korea': 0, 'Kuwait': 0, 'Kyrgyzstan': 0, 'Laos': 209, 'Latvia': 0,
                        'Lebanon': 3, 'Lesotho': 0, 'Liberia': 14, 'Libya': 0, 'Lithuania': 0, 'Luxembourg': 0,
                        'Madagascar': 513, 'Malawi': 0, 'Malaysia': 52, 'Maldives': 0, 'Mali': 0, 'Malta': 0,
                        'Marshall Islands': 0, 'Mauritania': 0, 'Mauritius': 0, 'Mexico': 0, 'Micronesia': 0,
                        'Moldova': 0, 'Mongolia': 0, 'Montenegro': 0, 'Morocco': 0, 'Mozambique': 0, 'Myanmar': 7561,
                        'Namibia': 0, 'Nauru': 0, 'Nepal': 394, 'Netherlands': 37, 'New Zealand': 0, 'Nicaragua': 0,
                        'Niger': 24, 'Nigeria': 1020, 'Norway': 0, 'Oman': 0, 'Pakistan': 2315, 'Palau': 0,
                        'Panama': 0, 'Papua New Guinea': 0, 'Paraguay': 0, 'Peru': 1, 'Philippines': 513, 'Poland': 1,
                        'Portugal': 1, 'Qatar': 0, 'Romania': 0, 'Russian Federation': 0, 'Rwanda': 9, 'Samoa': 0,
                        'Saudi Arabia': 0, 'Senegal': 0, 'Serbia': 0, 'Seychelles': 0, 'Sierra Leone': 50, 'Singapore': 0,
                        'Slovakia': 0, 'Slovenia': 0, 'Solomon Islands': 0, 'Somalia': 7, 'South Africa': 23, 'South Sudan': 0,
                        'Spain': 6, 'Sri Lanka': 13, 'St. Kitts and Nevis': 0, 'St. Lucia': 0, 'St. Vincent and the Grenadines': 0,
                        'Sudan': 0, 'Suriname': 0, 'Sweden': 0, 'Switzerland': 0, 'Syrian Arab Republic': 0, 'Tajikistan': 0,
                        'Thailand': 285, 'North Macedonia': 0, 'Timor-Leste': 0, 'Togo': 0, 'Tonga': 0, 'Trinidad and Tobago': 0,
                        'Tunisia': 0, 'Turkey': 0, 'Turkmenistan': 0, 'Tuvalu': 0, 'Uganda': 0, 'Ukraine': 0, 'United Arab Emirates': 0,
                        'United Kingdom': 3, 'United Republic of Tanzania': 0, 'United States of America': 28, 'Uruguay': 0,
                        'Uzbekistan': 0, 'Vanuatu': 0, 'Venezuela (Bolivarian Republic of)': 0, 'Viet Nam': 125, 'Western Sahara': 0, 'Yemen': 0,
                        'Zambia': 0, 'Zimbabwe': 0, 'Kosovo': 0
                    };
                
                // Tambahkan tahun-tahun berikutnya ke dalam objek data
                var dataYears = {
                '2009': data2009,
                '2010': data2010,
                '2011': data2011,
                '2012': data2012,
                '2013': data2013
                };
                
                // Potongan kode yang Anda tambahkan
                var colorscale = [
                    [0, 'gray'],
                    [0.0001, 'rgb(253, 237, 176)'],
                    [0.1, 'rgb(252, 212, 129)'],
                    [0.2, 'rgb(253, 187, 132)'],
                    [0.3, 'rgb(244, 144, 128)'],
                    [0.4, 'rgb(238, 108, 130)'],
                    [0.5, 'rgb(226, 77, 138)'],
                    [0.6, 'rgb(207, 56, 147)'],
                    [0.7, 'rgb(181, 39, 155)'],
                    [0.8, 'rgb(153, 27, 156)'],
                    [0.9, 'rgb(120, 18, 150)'],
                    [1, 'rgb(120, 18, 150)'] // Menambahkan nilai untuk 1 agar warna tetap konsisten
                ];

                var data2009_arr = loc.map(function(country) {
                    return data2009.hasOwnProperty(country) ? data2009[country] : '0';
                });

                var data = [{
                    type: 'choropleth',
                    locationmode: 'country names',
                    locations: loc,
                    z: data2009_arr,
                    text: loc,
                    colorscale: colorscale,
                    autocolorscale: false,
                    zmin: 0, // Menambahkan zmin untuk memastikan nilai terendah dimulai dari 0
                    zmax: 10000, // Menambahkan zmax untuk memastikan nilai tertinggi
                    marker: {
                        line: {
                            color: 'rgb(180,180,180)',
                            width: 0.5
                        }
                    },
                    colorbar: {
                        title: 'Production Total (1000 tonnes / unit)',
                        tickvals: [0, 1000, 3000, 5000, 7000, 9000, 10000], // Menghilangkan '0' dari tickvals
                        ticktext: ['0', '1000', '3000', '5000', '7000', '9000', '10000'] // Menghilangkan '0' dari ticktext
                    },
                    hovertemplate: '<b>%{text}</b><br>Production: %{z}<extra></extra>'
                }];

                var layout = {
                    title: 'Rice Feed Production by Country in 2009',
                    geo: {
                        showframe: false,
                        showcoastlines: false,
                        projection: {
                            type: 'equirectangular'
                        }
                    },
                    updatemenus: [{
                        buttons: Object.keys(dataYears).map(function(year) {
                            return {
                                method: 'restyle',
                                args: ['z', [Object.values(dataYears[year])]],
                                label: year
                            };
                        }),
                        direction: 'down',
                        pad: {'r': 10, 't': 10},
                        showactive: true,
                        type: 'buttons',
                        x: 0.1,
                        xanchor: 'left',
                        y: 1.05,
                        yanchor: 'top'
                    }]
                };

                // Inisialisasi plot
                Plotly.newPlot('map', data, layout);