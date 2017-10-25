#Take a cvs of stimuli, make a js file containing a list of items

import csv, string, copy
#import numpy as np

#in case I want to change the names for different versions                         
pipeline = "ext"
plain = "orig"


#Build up training items
nums_il = ["1."]*3+["2."]*3 #['1.', '1.', '1.', '2.', '2.', '2.'] Used to assign blocks
nums_li = nums_il[::-1]
trains =[[pipeline+".train", "Message", {"html": "<p>On the next screen you will see a practice scenario of four sentences <b>with markup</b>.</p><p>These sentences will NOT contain sufficient information to determine the who/what/when/where of the terrorist plot, but go ahead and make your best guess so that you can practice entering and submitting you answer.</p><p>Again, this is only a practice scenario. Feel free to take as much time as you need.</p> ","hideProgressBar": "true", "countsForProgressBar": "false"}],
	 [pipeline+".train", "MessageForm", {"html": {"include": "train.ext.html"},"answers": { "include": "train.ans.html"},"hideProgressBar": "true","countsForProgressBar": "false"}],
	 [pipeline+".train", "Message", {"html": "<p>You have completed the training scenario. The experiment will now begin, and you will be shown two full scenarios with markup.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>","hideProgressBar": "true","countsForProgressBar": "false"}],
         [plain+".train", "Message", {"html": "<p>On the next screen you will see a practice scenario of four sentences <b>without markup</b>.</p><p>These sentences will NOT contain sufficient information to determine the who/what/when/where of the terrorist plot, but go ahead and make your best guess so that you can practice entering and submitting you answer.</p><p>Again, this is only a practice scenario. Feel free to take as much time as you need.</p> "}],
	 [plain+".train", "MessageForm", { "html": {"include": "train.orig.html"}, "answers": { "include": "train.ans.html"}, "hideProgressBar": "true", "countsForProgressBar": "false"}],
	 [plain+".train", "Message", {"html": "<p>You have completed the training scenario. The experiment will now begin, and you will be shown two full scenarios without markup.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>","hideProgressBar": "true","countsForProgressBar": "false"}],
        ]
#Make copies of the training items, append blocks to names and build up names list (pipeline>plain, plain>pipeline)
trains_il = copy.deepcopy(trains)
trains_li = copy.deepcopy(trains)
tnames_il = []
tnames_li = []
for i in range(0,len(trains)):#can probably also do this with arrays
        trains_il[i][0] = nums_il[i]+trains[i][0]
        trains_li[i][0] = nums_li[i]+trains[i][0]
tnames_il=tnames_il+[trains_il[0][0],trains_il[3][0]]
tnames_li=tnames_li+[trains_li[0][0],trains_li[3][0]]


#Build up comments
nums_il = ["1."]*1+["2."]*1
nums_li = nums_il[::-1]
comms =[[pipeline+".comments","Form", {"html": "Any comments or feedback you'd like to provide?:<br><textarea name='comments' rows='4' cols='50'></textarea>"}],
        [plain+".comments","Form", {"html": "Any comments or feedback you'd like to provide?:<br><textarea name='comments' rows='4' cols='50'></textarea>"}],
]       
comms_il = copy.deepcopy(comms)
comms_li = copy.deepcopy(comms)
cnames_il = []
cnames_li = []
for i in range(0,len(comms)):
        comms_il[i][0] = nums_il[i]+comms[i][0]
        comms_li[i][0] = nums_li[i]+comms[i][0]
        cnames_il.append(comms_il[i][0])
        cnames_li.append(comms_li[i][0])


#Build up regular items (I might need to put the scenario in the group name...)
group1=group2=group3=group4=group5=group6=group7 = "noGroup"

def writeItems():
        items =  [[group1+".Scenario8", "MessageForm", { "html": { "include": "Scenario8."+group1+".html" }, "answers": { "include": "Scenario8.ans.html"},}],
                  [group2+".Scenario1", "MessageForm", { "html": { "include": "Scenario1."+group2+".html" }, "answers": { "include": "Scenario1.ans.html"},}],
                  [group3+".Scenario7", "MessageForm", { "html": { "include": "Scenario7."+group3+".html" }, "answers": { "include": "Scenario7.ans.html"},}],
                  [group4+".Scenario4", "MessageForm", { "html": { "include": "Scenario4."+group4+".html" }, "answers": { "include": "Scenario4.ans.html"},}]
                  #[group7+".TrainingB", "MessageForm", { "html": { "include": "TrainingB."+group7+".html" }, "answers": { "include": "TrainingB.ans.html"},}],
                  #[group6+".Scenario2", "MessageForm", { "html": { "include": "Scenario2."+group6+".html" }, "answers": { "include": "Scenario2.ans.html"},}],     
                  #[group5+".Scenario5", "MessageForm", { "html": { "include": "Scenario5."+group5+".html" }, "answers": { "include": "Scenario5.ans.html"},}]
                  ]
        return sorted(items)#Arrange pipeline > plain for later appending block numbers
               


nums_il=["1.","1.","2.","2."]
nums_li=["2.","2.","1.","1."]

#p1_il, p1_li
group1 = pipeline 
group2 = pipeline
group3 = plain
group4 = plain
#update the item names after group assignments
items1 = writeItems()#str(writeItems())     # hopefully this stays the same while I...
items1_il = copy.deepcopy(items1)#or writeItems()
items1_li = copy.deepcopy(items1)
names1_il = []
names1_li = []
for i in range(0,len(items1)):
        #print i, items1_il[i][0]
        items1_il[i][0] = nums_il[i]+items1[i][0]
        print i, items1_il[i][0]
        items1_li[i][0] = nums_li[i]+items1[i][0]
        #print i, items1_li[i][0]
        names1_il.append(items1_il[i][0])
        #print i,  names1_il
        names1_li.append(items1_li[i][0])
        #print i, names1_li
                
print "items: ", items1_il
print "names: ", names1_il


#p2             
group1 = plain
group2 = plain
group3 = pipeline
group4 = pipeline
items2 = writeItems()
items2_il = copy.deepcopy(items2)#or writeItems()
items2_li = copy.deepcopy(items2)
names2_il = []
names2_li = []
for i in range(0,len(items2)):
        items2_il[i][0] = nums_il[i]+items2[i][0]
        items2_li[i][0] = nums_li[i]+items2[i][0]
        names2_il.append(items2_il[i][0])
        names2_li.append(items2_li[i][0])

#p3                 
group1 = pipeline
group2 = plain
group3 = plain
group4 = pipeline
items3 = writeItems()
items3_il = copy.deepcopy(items3)#or writeItems()
items3_li = copy.deepcopy(items3)
names3_il = []
names3_li = []
for i in range(0,len(items3)):
        items3_il[i][0] = nums_il[i]+items3[i][0]
        items3_li[i][0] = nums_li[i]+items3[i][0]
        names3_il.append(items3_il[i][0])
        names3_li.append(items3_li[i][0])

#p4        
group1 = plain
group2 = pipeline
group3 = pipeline
group4 = plain
items4 = writeItems()
items4_il = copy.deepcopy(items4)#or writeItems()
items4_li = copy.deepcopy(items4)
names4_il = []
names4_li = []
for i in range(0,len(items4)):
        items4_il[i][0] = nums_il[i]+items4[i][0]
        items4_li[i][0] = nums_li[i]+items4[i][0]
        names4_il.append(items4_il[i][0])
        names4_li.append(items4_li[i][0])

#p5
group1 = pipeline
group2 = plain
group3 = pipeline
group4 = plain
items5 = writeItems()
items5_il = copy.deepcopy(items5)#or writeItems()
items5_li = copy.deepcopy(items5)
names5_il = []
names5_li = []
for i in range(0,len(items5)):
        items5_il[i][0] = nums_il[i]+items5[i][0]
        items5_li[i][0] = nums_li[i]+items5[i][0]
        names5_il.append(items5_il[i][0])
        names5_li.append(items5_li[i][0])


#p6
group1 = plain
group2 = pipeline
group3 = plain
group4 = pipeline
items6 = writeItems()
items6_il = copy.deepcopy(items6)#or writeItems()
items6_li = copy.deepcopy(items6)
names6_il = []
names6_li = []
for i in range(0,len(items6)):
        items6_il[i][0] = nums_il[i]+items6[i][0]
        items6_li[i][0] = nums_li[i]+items6[i][0]
        names6_il.append(items6_il[i][0])
        names6_li.append(items6_li[i][0])                                 


with open('SUS.csv', 'r') as csvfile:#with open('SUS.csv', 'rb') as csvfile:
        #counter = 1
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
                itype1i = "1."+pipeline+".SUS."+itype
                itype1l = "1."+plain+".SUS."+itype
                itype2i = "2."+pipeline+".SUS."+itype
                itype2l = "2."+plain+".SUS."+itype
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

        writefile.write("var training_il = "+str(trains_il)+";\n\n")
        writefile.write("var training_li = "+str(trains_li)+";\n\n")
                
        writefile.write("var p1_il = "+str(items1_il)+";\n\n")
        writefile.write("var p1_li = "+str(items1_li)+";\n\n")
        writefile.write("var p2_il = "+str(items2_il)+";\n\n")
        writefile.write("var p2_li = "+str(items2_li)+";\n\n")
        writefile.write("var p3_il = "+str(items3_il)+";\n\n")
        writefile.write("var p3_li = "+str(items3_li)+";\n\n")
        writefile.write("var p4_il = "+str(items4_il)+";\n\n")
        writefile.write("var p4_li = "+str(items4_li)+";\n\n")
        writefile.write("var p5_il = "+str(items5_il)+";\n\n")
        writefile.write("var p5_li = "+str(items5_li)+";\n\n")
        writefile.write("var p6_il = "+str(items6_il)+";\n\n")
        writefile.write("var p6_li = "+str(items6_li)+";\n\n")
        writefile.write("var SUSItems = "+str(sus)+";\n\n\n")
        writefile.write("var comments_il = "+str(comms_il)+";\n\n\n")
        writefile.write("var comments_li = "+str(comms_li)+";\n\n\n")


        writefile.write("var ss1_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names1_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names1_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss1_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names1_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names1_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")  

        writefile.write("var ss2_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names2_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names2_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss2_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names2_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names2_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")

        writefile.write("var ss3_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names3_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names3_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss3_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names3_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names3_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")  

        writefile.write("var ss4_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names4_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names4_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss4_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names4_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names4_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")

        writefile.write("var ss5_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names5_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names5_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss5_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names5_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names5_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")  

        writefile.write("var ss6_il = seq('inst', '"+tnames_il[0]+"', sepWith('sep',shuffle('"+"', '".join(names6_il[0:2])+"')), 'toSUS', '" + "', '".join(susNames1i)+"', '"+cnames_il[0]+"', 'middle', '"+tnames_il[1]+"', sepWith('sep',shuffle('"+"', '".join(names6_il[2:4])+"')), 'toSUS', '"+"', '".join(susNames2l)+"', '"+cnames_il[1]+"', 'end');\n\n")
        writefile.write("var ss6_li = seq('inst', '"+tnames_li[1]+"', sepWith('sep',shuffle('"+"', '".join(names6_li[2:4])+"')), 'toSUS', '" + "', '".join(susNames1l)+"', '"+cnames_li[1]+"', 'middle', '"+tnames_li[0]+"', sepWith('sep',shuffle('"+"', '".join(names6_li[0:2])+"')), 'toSUS', '"+"', '".join(susNames2i)+"', '"+cnames_li[0]+"', 'end');\n\n")

        writefile.close()


#write a few to file, then in js have random selection for which language starts

