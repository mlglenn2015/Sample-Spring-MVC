
//import {ModalContainer, ModalDialog} from 'react-modal-dialog';

var maxId = 0;


/* This is the popup edit form tied to the Messages Q1Div */
//var MessageEditBox = React.createClass({
    /*loadPropertiesFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },*/

    //handleMessageFormSubmit: function(product) {
    //    var products = this.state.data;
        // Optimistically set an id on the new item. It will be replaced by an
        // id generated by the server. In a production application you would likely
        // not use Date.now() for this and would have a more robust system in place.
        //product.id = 99; //Date.now(); //NO
    //    product.id = this.getNewProductId;
    //    product.stocked = false;
        //product.category = "Placeholder";
        //product.price = "$99.99";
        //product.author = "test";
        //product.text = "test";
    //    var newProducts = products.concat([product]);
    //    this.setState({data: newProducts});
        //submit to server and refresh the list
    //    $.ajax({
    //        url: this.props.url,
    //        dataType: 'json',
    //        type: 'POST',
    //        data: product,
    //        success: function(data) {
    //            this.setState({data: data});
    //        }.bind(this),
    //        error: function(xhr, status, err) {
    //            this.setState({data: products});
    //            console.error(this.props.url, status, err.toString());
    //        }.bind(this)
    //    });
    //},

    //getInitialState: function() {
    //    return {data: []};
    //},

    //componentDidMount: function() {
        //this.loadPropertiesFromServer();
        //setInterval(this.loadPropertiesFromServer, this.props.pollInterval);
    //},

    //getNewProductId: function() {
    //    var nextid = maxId + 1;
    //    return nextid;
    //},

    //render: function() {
    //    return (
    //        <div className="productBox">
    //            <MessageEditForm onProductSubmit={this.handleMessageFormSubmit} />
    //        </div>
    //    );
    //}
//});


/*var MessageEditForm = React.createClass({

    getInitialState: function() {
        alert('MessageEditForm.getInitialState()');
        return {msgKey: '', msgMessage: '', active: ''};
    },

    componentWillMount: function() {
        //alert('MessageEditForm.componentWillMount()');
    },

    componentDidMount: function() {
        //alert('MessageEditForm.componentDidMount()');
    },

    componentWillUpdate: function(nextProps, nextState) {
        //alert('MessageEditForm.componentWillUpdate()');
    },

    componentDidUpdate: function(prevProps, prevState) {
        //alert('MessageEditForm.componentDidUpdate()');
    },

    handleMsgKeyChange: function(e) {
        this.setState({msgKey: e.target.value});
    },

    handleMsgMessageChange: function(e) {
        this.setState({msgMessage: e.target.value});
    },

    handleActiveChange: function(e) {
        this.setState({active: e.target.value});
    },

    handleSubmit: function(e) {
        alert('handleSubmit');
        e.preventDefault();

        //React.findDOMNode(this.refs.editFormQ1).style.visibility = 'hidden';

        var msgKey = this.state.msgKey.trim();
        var msgMessage = this.state.msgMessage.trim();
        var active = this.state.active.trim();
        var nextid = 100;
        //alert(nextid);
        //if (!category || !name || !price) {
        //    alert("!");
        //    return;
        //}
        this.props.onProductSubmit({msgKey: msgKey, msgMessage: msgMessage, active: active}); //set the properties
        this.setState({msgKey: '', msgMessage: '', active: ''});
    },

    handleCancel: function(e) {
        alert('handleCancel');
        e.preventDefault();

        //React.findDOMNode(this.refs.editFormQ1).style.visibility = 'hidden';

        //var name = this.state.name.trim();
        //var category = this.state.category.trim();
        //var price = this.state.price.trim();
        //var nextid = this.state.maxid.trim() + 1;
        //alert(nextid);
        //if (!category || !name || !price) {
        //    alert("!");
        //    return;
        //}
        //this.props.onProductSubmit({name: name, category: category, price: price}); //set the properties
        this.setState({ msgKey: '', msgMessage: '', active: '', showEditFormQ1: false });

        //alert('this.refs.showEditFormQ1=' + this.refs.showEditFormQ1);
        //alert('MyAppPage.state.showEditFormQ1=' + MyAppPage.state.showEditFormQ1);
        //this.setState({ showEditFormQ1: true });
        //onChange={this.onSearchTextChanged.bind(this)}
        //Document.getElementsById('editFormQ1').style.visibility = 'hidden';
    },

    render: function() {
        return (
            <form className="messagesForm" onSubmit={this.handleSubmit}>
                <h2>Edit Message Row</h2>
                <label for="msgKey">Message Key:</label>
                <input
                        type="text"
                        placeholder="Message Key"
                        value={this.state.msgKey}
                        onChange={this.handleMsgKeyChange}
                />
                <br />
                <label for="msgMessage">Message Text:</label>
                <textarea
                        placeholder="Message"
                        rows="5"
                        cols="40"
                        value={this.state.msgMessage}
                        onChange={this.handleMsgMessageChange}
                />
                <br />
                <label for="active">Active:</label>
                <select value={this.state.active} onChange={this.handleActiveChange}>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
                <br />
                <br />
                <input type="submit" value="Save" />
                <button value="Cancel" onClick={this.handleCancel}>Cancel</button>
            </form>
        );
    }
});*/


var Q1Row = React.createClass({

    openEditForm: function(e) {
        alert('myApplicationComponent=' + myApplicationComponent);
        alert('e=' + e);
        alert('this.props.msgKey=' + this.props.msgKey);
        alert('this.props.msgMessage=' + this.props.msgMessage);
        alert('this.props.active=' + this.props.active);
        alert('this.props.showeditform=' + this.props.showeditform);
        //alert(this.refs.input.getDOMNode().value);
        //alert('Document.getElementsById(editFormQ1)=' + Document.getElementsById('editFormQ1'));
        //make editFormQ1 visible
        this.setState({ showEditFormQ1: true });
        //this.props.showeditform = true;
        //ReactDOM.findDOMNode(this.refs.editFormQ1).style.visibility = 'visible';
        //Document.getElementsById('editFormQ1').style.visibility = 'visible';
        //set initial values
    },

    render: function() {
        var msgKey = this.props.active == "Y" ? this.props.msgKey : <span style={{color: 'red'}}>{this.props.msgKey}</span>;
        var trunced = this.props.msgMessage.substr(0,15);
        var active = this.props.active == "Y" ? this.props.active : <span style={{color: 'red'}}>{this.props.active}</span>;
        return (
            <tr>
                <td className="tableCellCol1">{msgKey}</td>
                <td className="tableCellCol2"><div className="tooltip">{trunced}...<span className="tooltiptext">{this.props.msgMessage}</span></div></td>
                <td className="tableCellCol3">{active}</td>
                <td className="tableCellCol4"><button type="button" className="button" onClick={this.openEditForm}>Edit</button></td>
            </tr>
        );
    }
});
// {this.state.showResults ? <ProductBox />}

/*var Q1HeaderRow = React.createClass({
    render: function() {
        return (<tr>
                    <th id="tableHeadCol1">Message Key</th>
                    <th className="tableHeadCenter">Message</th>
                    <th className="tableHeadRight"> </th>
                </tr>);
    }
});*/


var MessagesList = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        var headerRow = null;

        this.props.data.forEach(function(msgObj) {

            /*if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
             return;
             }*/
            /*if (headerRow == null) {
                rows.push(<Q1HeaderRow key="messages_header"/>);
                headerRow = 1;
            }*/
            /*if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }*/

            rows.push(
                <Q1Row key={msgObj.id} id={msgObj.id} msgKey={msgObj.msgKey}
                    msgMessage={msgObj.msgMessage} active={msgObj.active} showeditform={this.props.showeditform}>
                    {msgObj.id}
                    {msgObj.msgKey}
                    {msgObj.msgMessage}
                    {msgObj.active}
                </Q1Row>
            );
            //lastCategory = msgObj.category;
            if (maxId < msgObj.id) {
                maxId = msgObj.id;
            }
        }.bind(this));
            return (
                <table className="messagesTable">
                    <thead>
                        <tr>
                            <th className="tableHeadCol1">Message Key</th>
                            <th className="tableHeadCol2">Message</th>
                            <th className="tableHeadCol3">Active</th>
                            <th className="tableHeadCol4"></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
        );
    }
});


var MessagesCell = React.createClass({

    loadPropertiesFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadPropertiesFromServer();
        setInterval(this.loadPropertiesFromServer, this.props.pollInterval);
    },

    getNewMessageId: function() {
        var nextid = maxId + 1;
        return nextid;
    },

    render: function() {
        return (
                <div id="messagesBox">
                    <div id="messagesBoxData">
                        <MessagesList data={this.state.data} showeditform={this.props.showeditform}/>
                    </div>
                </div>
        );
    }
});


/*var EditFormQ1 = React.createClass({

    getInitialState: function() {
        //alert('EditFormQ1.this.refs.showEditFormQ1=' + this.refs.showEditFormQ1);
        return {
            focused: 0
        };
    },

    update: function()
    {
        //var theVal = this.refs.myInput.getDOMNode().value;
        //this.props.onUpdate(theVal);
    },

    render: function() {
        return (
            <div id="editFormQ1" className="editFormQ1">
                Static text displayed in the editFormQ1
                <MessageEditBox />
            </div>
        );
    }
});*/
var EditFormQ1 = React.createClass({

    getInitialState: function() {
        //alert('EditFormQ1.getInitialState()');
        return { msgKey: '', msgMessage: '', active: '', focused: 0 };
    },

    componentWillMount: function() {
        //alert('MessageEditForm.componentWillMount()');
    },

    componentDidMount: function() {
        //alert('MessageEditForm.componentDidMount()');
    },

    componentWillUpdate: function(nextProps, nextState) {
        //alert('MessageEditForm.componentWillUpdate()');
    },

    componentDidUpdate: function(prevProps, prevState) {
        //alert('MessageEditForm.componentDidUpdate()');
    },

    handleMsgKeyChange: function(e) {
        this.setState({msgKey: e.target.value});
    },

    handleMsgMessageChange: function(e) {
        this.setState({msgMessage: e.target.value});
    },

    handleActiveChange: function(e) {
        this.setState({active: e.target.value});
    },

    handleSubmit: function(e) {
        alert('handleSubmit');
        e.preventDefault();

        //React.findDOMNode(this.refs.editFormQ1).style.visibility = 'hidden';

        var msgKey = this.state.msgKey.trim();
        var msgMessage = this.state.msgMessage.trim();
        var active = this.state.active.trim();
        var nextid = 100;
        //alert(nextid);
        //if (!category || !name || !price) {
        //    alert("!");
        //    return;
        //}
        //this.props.onProductSubmit({msgKey: msgKey, msgMessage: msgMessage, active: active}); //set the properties
        //this.setState({msgKey: '', msgMessage: '', active: ''});
    },

    handleCancel: function(e) {
        alert('handleCancel');
        //alert('this.props.onHandleCancel=' + this.props.onHandleCancel);
        //this.props.onHandleCancel(false);
        //alert('this.props.onHandleCancel=' + this.props.onHandleCancel);
        e.preventDefault();
        this.setState({ showEditFormQ1: false });

        //React.findDOMNode(this.refs.editFormQ1).style.visibility = 'hidden';

        //var name = this.state.name.trim();
        //var category = this.state.category.trim();
        //var price = this.state.price.trim();
        //var nextid = this.state.maxid.trim() + 1;
        //alert(nextid);
        //if (!category || !name || !price) {
        //    alert("!");
        //    return;
        //}
        //this.props.onProductSubmit({name: name, category: category, price: price}); //set the properties
        //this.setState({ msgKey: '', msgMessage: '', active: '', showEditFormQ1: false });

        //alert('this.refs.showEditFormQ1=' + this.refs.showEditFormQ1);
        //alert('MyAppPage.state.showEditFormQ1=' + MyAppPage.state.showEditFormQ1);
        //this.setState({ showEditFormQ1: true });
        //onChange={this.onSearchTextChanged.bind(this)}
        //Document.getElementsById('editFormQ1').style.visibility = 'hidden';
    },

    update: function()
    {
        //var theVal = this.refs.myInput.getDOMNode().value;
        alert();
        this.props.onUpdate(true);
    },

    render: function() {
        return (
            <div id="editFormQ1" className="editFormQ1">
                Static text displayed in the editFormQ1
                <div className="productBox">
                    <form className="messagesForm" onSubmit={this.handleSubmit}>
                        <h2>Edit Message Row</h2>
                        <label for="msgKey">Message Key:</label>
                        <input
                            type="text"
                            placeholder="Message Key"
                            value={this.state.msgKey}
                            onChange={this.handleMsgKeyChange}
                        />
                        <br />
                        <label for="msgMessage">Message Text:</label>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            cols="40"
                            value={this.state.msgMessage}
                            onChange={this.handleMsgMessageChange}
                        />
                        <br />
                        <label for="active">Active:</label>
                        <select value={this.state.active} onChange={this.handleActiveChange}>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" value="Save" />
                        <button value="Cancel" onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
});


/* This class is the whole page */
var MyAppPage = React.createClass({

    getInitialState: function() {
        return {
            showEditFormQ1: false,
            showEditFormQ2: false,
            showEditFormQ3: false,
            showEditFormQ4: false
        };
    },

    componentDidMount: function() {
        //alert();
    },

    editFormQ1Show: function(val){
        alert('MyAppPage.editFormQ1Show.val=' + val);
        this.setState({
            data: val
        });
    },

    render: function() {

        var renderEditFormQ1;

        if (this.state.showEditFormQ1) {
            renderEditFormQ1 = <EditFormQ1 onHandleCancel={this.state.showEditFormQ1}/>
        } else {
            renderEditFormQ1 = null
        }

        return (
            <div>
                <div id="outerContentTitle">
                    {this.props.pagename} Outer Content Title
                </div>
                <div id="innerContentDiv">

                    <div id="innerContentTitle">
                        {this.props.pagename} Inner Content Title
                    </div>

                    <div id="contentWrapperQ1Div">
                        <div id="contentHeaderQ1Div">
                            <h3>Messages (Q1Div Header)</h3>
                        </div>
                        <div id="contentInnerQ1Div">
                            <div id="gridQ1Div">
                                <MessagesCell url="/data/messages.json" pollInterval={60000} showeditform={this.state.showEditFormQ1} />
                            </div>

                            {renderEditFormQ1}

                        </div>
                    </div>

                    <div id="contentWrapperQ2Div">
                        <div id="contentHeaderQ2Div">
                            <h3>Q2Div Header</h3>
                        </div>
                        <div id="contentInnerQ2Div">
                            <div id="gridQ2Div">
                                Static text displayed in the Q2Div
                                <div className='fixedTableContainer'></div>
                            </div>
                        </div>
                    </div>

                    <div id="contentWrapperQ3Div">
                        <div id="contentHeaderQ3Div">
                            <h3>Q3Div Header</h3>
                        </div>
                        <div id="contentInnerQ3Div">
                            <div id="gridQ3Div">
                                Static text displayed in the Q3Div
                            </div>
                        </div>
                    </div>

                    <div id="contentWrapperQ4Div">
                        <div id="contentHeaderQ4Div">
                            <h3>Q4Div Header</h3>
                        </div>
                        <div id="contentInnerQ4Div">
                            <div id="gridQ4Div">
                                Static text displayed in the Q4Div
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
});

// { this.state.showEditFormQ1 ? <EditFormQ1 onHandleCancel={000000}/> : null }

//onUpdate={this.editFormQ1Show}

//http://localhost:8080/messages/list
/*ReactDOM.render(
<MessagesCell url="/data/messages.json" pollInterval={60000}/>, document.getElementById('gridQ1Div')
<ProductBox/>, document.getElementById('editFormQ1')
);*/

var myApplicationComponent = ReactDOM.render(
    <MyAppPage pagename="My Application" />, document.getElementById('outerContentDiv')
);