#Take a cvs of stimuli, make a js file containing a list of items

import csv, string


#Build up regular items (I might need to put the scenario in the group name...)
group1=group2=group3=group4=group5=group6=group7 = "noGroup"

def writeItems():
        items = [[group7+".TrainingB", "MessageForm", { "html": { "include": "TrainingB."+group7+".html" }, "answers": { "include": "TrainingB.ans.html"},}],#NEED ORIG VERSIONS!
                  [group2+".Scenario1", "MessageForm", { "html": { "include": "Scenario1."+group2+".html" }, "answers": { "include": "Scenario1.ans.html"},}],
                  [group3+".Scenario2", "MessageForm", { "html": { "include": "Scenario2."+group3+".html" }, "answers": { "include": "Scenario2.ans.html"},}],     
                  [group4+".Scenario4", "MessageForm", { "html": { "include": "Scenario4."+group4+".html" }, "answers": { "include": "Scenario4.ans.html"},}],
                  [group5+".Scenario5", "MessageForm", { "html": { "include": "Scenario5."+group5+".html" }, "answers": { "include": "Scenario5.ans.html"},}],
                  [group6+".Scenario7", "MessageForm", { "html": { "include": "Scenario7."+group6+".html" }, "answers": { "include": "Scenario7.ans.html"},}],
                  [group1+".Scenario8", "MessageForm", { "html": { "include": "Scenario8."+group1+".html" }, "answers": { "include": "Scenario8.ans.html"},}]]
        return items
               
#in case I want to change the names for different versions                         
pipeline = "ext"
plain = "orig"

group1 = pipeline 
group2 = pipeline
group3 = plain
group4 = plain
#update the item names after group assignments
items1 = str(writeItems())     # hopefully this stays the same while I...
#and add these to a names list?
i1 = str(group1)+".Scenario8"
i2 = str(group2)+".Scenario1"
l1 = str(group3)+".Scenario2"
l2 = str(group4)+".Scenario4"
names1 = [i1, i2,  l1, l2]
#names1ilb = [i2, i1,  l1, l2]
#names1ilc = [i1, i2,  l2, l1]
#names1ild = [i2, i1,  l2, l1]
#names1lia = [l1, l2,  i1, i2]
#names1lib = [l2, l1,  i1, i2]
#names1lic = [l1, l2,  i2, i1]
#names1lid = [l2, l1,  i2, i1]

                 
group1 = plain
group2 = plain
group3 = pipeline
group4 = pipeline
items2 = str(writeItems())
l1 = str(group1)+".Scenario8"
l2 = str(group2)+".Scenario1"
i1 = str(group3)+".Scenario2"
i2 = str(group4)+".Scenario4"
names2 = [i1, i2,  l1, l2]
#names2ilb = [i2, i1,  l1, l2]
#names2ilc = [i1, i2,  l2, l1]
#names2ild = [i2, i1,  l2, l1]
#names2lia = [l1, l2,  i1, i2]
#names2lia = [l2, l1,  i1, i2]
#names2lia = [l1, l2,  i2, i1]
#names2lia = [l2, l1,  i2, i1]
                 
group1 = pipeline
group2 = plain
group3 = plain
group4 = pipeline
items3 = str(writeItems())
i1 = str(group1)+".Scenario8"
l2 = str(group2)+".Scenario1"
l1 = str(group3)+".Scenario2"
i2 = str(group4)+".Scenario4"
names3 = [i1, i2,  l1, l2]
#names3ilb = [i2, i1,  l1, l2]
#names3ilc = [i1, i2,  l2, l1]
#names3ild = [i2, i1,  l2, l1]
#names3lia = [l1, l2,  i1, i2]
#names3lia = [l2, l1,  i1, i2]
#names3lia = [l1, l2,  i2, i1]
#names3lia = [l2, l1,  i2, i1]
        
group1 = plain
group2 = pipeline
group3 = pipeline
group4 = plain
items4 = str(writeItems())
l1 = str(group1)+".Scenario8"
i2 = str(group2)+".Scenario1"
i1 = str(group3)+".Scenario2"
l2 = str(group4)+".Scenario4"
names4 = [i1, i2,  l1, l2]
#names4ilb = [i2, i1,  l1, l2]
#names4ilc = [i1, i2,  l2, l1]
#names4ild = [i2, i1,  l2, l1]
#names4lia = [l1, l2,  i1, i2]
#names4lia = [l2, l1,  i1, i2]
#names4lia = [l1, l2,  i2, i1]
#names4lia = [l2, l1,  i2, i1]
                                        


with open('SUS.csv', 'r') as csvfile:#with open('SUS.csv', 'rb') as csvfile:
        counter = 1
        sus = []
        susNames1i = []
        susNames1l = []
        susNames2i = []
        susNames2l = []
        r = csv.reader(csvfile)
        next(r)#r.next()
        for row in r:
                order = row[0]
                statement = row[1]
                polarity = row[2]
                itype = polarity+"."+order
                itype1i = "SUS.pipeline.1."+itype
                itype1l = "SUS.plain.2."+itype
                itype2i = "SUS.pipeline.2."+itype
                itype2l = "SUS.plain.2."+itype
                #arbitrary order for lang/block right now (Latin square for which goes with which)
                item1i = [itype1i, "AcceptabilityJudgment", {"s": statement, "q": "", "as": ["1", "2", "3", "4", "5"], "leftComment": "strongly disagree", "rightComment": "strongly agree"} ]
                item1l = [itype1l, "AcceptabilityJudgment", {"s": statement, "q": "", "as": ["1", "2", "3", "4", "5"], "leftComment": "strongly disagree", "rightComment": "strongly agree"} ]
                item2l = [itype2l, "AcceptabilityJudgment", {"s": statement, "q": "", "as": ["1", "2", "3", "4", "5"], "leftComment": "strongly disagree", "rightComment": "strongly agree"} ]
                item2i = [itype2i, "AcceptabilityJudgment", {"s": statement, "q": "", "as": ["1", "2", "3", "4", "5"], "leftComment": "strongly disagree", "rightComment": "strongly agree"} ]
                sus.extend([item1i,item1l,item2l,item2i])
                susNames1i.append(itype1i)
                susNames1l.append(itype1l)
                susNames2i.append(itype2i)
                susNames2l.append(itype2l)
                
        csvfile.close()



with open('genItems.js', 'w') as writefile:
                
        writefile.write("var p1 = "+items1+";\n\n")
        writefile.write("var p2 = "+items2+";\n\n")
        writefile.write("var p3 = "+items3+";\n\n")
        writefile.write("var p4 = "+items4+";\n\n")
        writefile.write("var SUSItems = "+str(sus)+";\n\n\n")

        writefile.write("var ss1_il = seq('inst', 'trainM', sepWith('sep',shuffle('"+"', '".join(names1[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', 'comments', 'trainN', sepWith('sep',shuffle('"+"', '".join(names1[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', 'comments');\n\n")
        writefile.write("var ss1_li = seq('inst', 'trainN', sepWith('sep',shuffle('"+"', '".join(names1[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', 'comments', 'trainM', sepWith('sep',shuffle('"+"', '".join(names1[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', 'comments');\n\n")  

        writefile.write("var ss2_il = seq('inst', 'trainM', sepWith('sep',shuffle('"+"', '".join(names2[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', 'comments', 'trainN', sepWith('sep',shuffle('"+"', '".join(names2[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', 'comments');\n\n")
        writefile.write("var ss2_li = seq('inst', 'trainN', sepWith('sep',shuffle('"+"', '".join(names2[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', 'comments', 'trainM', sepWith('sep',shuffle('"+"', '".join(names2[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', 'comments');\n\n")

        writefile.write("var ss3_il = seq('inst', 'trainM', sepWith('sep',shuffle('"+"', '".join(names3[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', 'comments', 'trainN', sepWith('sep',shuffle('"+"', '".join(names3[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', 'comments');\n\n")
        writefile.write("var ss3_li = seq('inst', 'trainN', sepWith('sep',shuffle('"+"', '".join(names3[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', 'comments', 'trainM', sepWith('sep',shuffle('"+"', '".join(names3[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', 'comments');\n\n")  

        writefile.write("var ss4_il = seq('inst', 'trainM', sepWith('sep',shuffle('"+"', '".join(names4[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', 'comments', 'trainN', sepWith('sep',shuffle('"+"', '".join(names4[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', 'comments');\n\n")
        writefile.write("var ss4_li = seq('inst', 'trainN', sepWith('sep',shuffle('"+"', '".join(names4[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', 'comments', 'trainM', sepWith('sep',shuffle('"+"', '".join(names4[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', 'comments');\n\n")  
       
         

                
        writefile.close()


#write a few to file, then in js have random selection for which language starts

